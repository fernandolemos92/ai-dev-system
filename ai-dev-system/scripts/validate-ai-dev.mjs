#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const failures = [];
const warnings = [];

function fail(message) { failures.push(message); }
function warn(message) { warnings.push(message); }

function parseArgs(argv) {
  const args = { workspace: "ai-dev-workspace/current", task: null, all: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--workspace" || arg === "-w") args.workspace = argv[++i];
    else if (arg === "--task" || arg === "-t") args.task = argv[++i];
    else if (arg === "--all" || arg === "-a") args.all = true;
    else if (arg === "--help" || arg === "-h") {
      console.log("Usage: node ai-dev-system/scripts/validate-ai-dev.mjs --workspace ai-dev-workspace/current [--task TASK.md] [--all]");
      process.exit(0);
    }
  }
  return args;
}

function resolveExisting(inputPath) {
  const resolved = path.isAbsolute(inputPath) ? inputPath : path.resolve(process.cwd(), inputPath);
  if (!fs.existsSync(resolved)) throw new Error(`Missing path: ${resolved}`);
  return resolved;
}

function readText(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing file: ${filePath}`);
    return "";
  }
  return fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function countMatches(text, regex) {
  return [...text.matchAll(regex)].length;
}

function uniqueLineKey(text, key, label) {
  const count = countMatches(text, new RegExp(`^${escapeRegExp(key)}`, "gm"));
  if (count !== 1) fail(`${label} must appear exactly once: '${key}' found ${count}`);
}

function section(text, heading) {
  const re = new RegExp(`^##\\s+${escapeRegExp(heading)}\\s*\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "m");
  const match = text.match(re);
  return match ? match[1].trim() : "";
}

function firstLine(value) {
  return (value || "").split(/\r?\n/)[0]?.trim().replace(/^[-*]\s*/, "").trim() || "";
}

function normalizeSpecialistList(value) {
  if (!value) return [];
  return value
    .split(/\r?\n|,/)
    .map((item) => item.trim().replace(/^[-*]\s*/, "").replace(/\s*\(.*?\)\s*/g, "").trim())
    .filter((item) => item && !/^(none|not-needed|n\/a|na)$/i.test(item));
}

function rawSpecialistLines(value) {
  if (!value) return [];
  return value
    .split(/\r?\n|,/)
    .map((item) => item.trim().replace(/^[-*]\s*/, "").trim())
    .filter((item) => item && !/^(none|not-needed|n\/a|na)$/i.test(item));
}

function hasInlineSpecialistDecoration(value) {
  return /\([^\r\n]*\)/.test(value || "");
}

function nativeAgentImproperArtifactAuthorship(text) {
  return /(write your output to a file|write the complete output|return to orchestrator with output path|output path and summary)/i.test(text || "");
}

function canonicalSpecialists() {
  const scriptDir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(.:\/)/, "$1"));
  const systemRoot = path.dirname(scriptDir);
  const agentsDir = path.join(systemRoot, "system", "agents");
  const names = new Set(["none"]);
  if (fs.existsSync(agentsDir)) {
    for (const entry of fs.readdirSync(agentsDir, { withFileTypes: true })) {
      if (entry.isFile() && entry.name.endsWith(".md")) {
        const base = entry.name.replace(/\.md$/i, "");
        if (base !== "AGENTS") names.add(base.toLowerCase());
      }
    }
  }
  return names;
}

function taskSpecialists(text) {
  const ownerSection = section(text, "Owner Specialist");
  const supportingSection = section(text, "Supporting Specialists");
  return {
    owner: firstLine(ownerSection),
    ownerRaw: firstLine(ownerSection),
    supporting: normalizeSpecialistList(supportingSection),
    supportingRaw: rawSpecialistLines(supportingSection),
  };
}

const specialistStandards = {
  "design-system": [
    "system/agents/design-system.md",
    "system/design/DESIGN_SYSTEM_STANDARDS.md",
    "system/design/DESIGN_MD_TEMPLATE.md",
  ],
  ui: [
    "system/agents/ui.md",
    "system/design/DESIGN_SYSTEM_STANDARDS.md",
  ],
  motion: [
    "system/agents/motion.md",
    "system/design/DESIGN_SYSTEM_STANDARDS.md",
  ],
  frontend: [
    "system/agents/frontend.md",
    "system/engineering/CODING_STANDARDS.md",
    "system/engineering/ARCHITECTURE_CONTRACTS.md",
  ],
  backend: [
    "system/agents/backend.md",
    "system/engineering/CODING_STANDARDS.md",
    "system/engineering/ARCHITECTURE_CONTRACTS.md",
  ],
  database: [
    "system/agents/database.md",
    "system/engineering/CODING_STANDARDS.md",
    "system/engineering/ARCHITECTURE_CONTRACTS.md",
  ],
  security: [
    "system/agents/security.md",
    "system/engineering/CODING_STANDARDS.md",
    "system/engineering/ARCHITECTURE_CONTRACTS.md",
  ],
  research: [
    "system/agents/research.md",
    "system/research/DISCOVERY_STANDARDS.md",
  ],
  "ux-research": [
    "system/agents/ux-research.md",
    "system/research/DISCOVERY_STANDARDS.md",
  ],
  growth: [
    "system/agents/growth.md",
  ],
  architectux: [
    "system/agents/architectux.md",
  ],
  prioritizer: [
    "system/agents/prioritizer.md",
  ],
  "project-manager": [
    "system/agents/project-manager.md",
  ],
  "evidence-qa": [
    "system/agents/evidence-qa.md",
  ],
  "reality-checker": [
    "system/agents/reality-checker.md",
  ],
};

function requiredStandardsForSpecialists(spec) {
  const names = [];
  if (spec?.owner && spec.owner !== "none") names.push(spec.owner);
  for (const support of spec?.supporting || []) names.push(support);
  const required = new Set();
  for (const name of names) {
    const standards = specialistStandards[name.toLowerCase()] || [`system/agents/${name}.md`];
    for (const standard of standards) required.add(standard);
  }
  return [...required];
}

function containsPathEvidence(text, requiredPath) {
  const normalized = requiredPath.replaceAll("\\", "/");
  const alternate = normalized.replace(/^system\//, "ai-dev-system/system/");
  const haystack = text.replaceAll("\\", "/");
  return haystack.toLowerCase().includes(normalized.toLowerCase()) || haystack.toLowerCase().includes(alternate.toLowerCase());
}

function touchesDocumentationSensitiveBehavior(text) {
  return /(next\.?js|react|tailwind|prisma|framer|motion|lenis|reduced-motion|reduced motion|scroll-linked|scroll linked|zod|tiptap|auth|oauth|sdk|api|database|postgres|sqlite|mysql|redis|stripe|supabase|firebase|router|route handler|css|generated client|migration|token serialization|theme mapping|theming)/i.test(text || "");
}

function hasDocumentationEvidence(text) {
  return /(context7|official docs|official documentation|vendor docs|local docs|documentation|docs waiver|documentation waiver|explicit waiver|waiver)/i.test(text || "");
}

function genericWaiver(text) {
  return /(well-established pattern|well established pattern|common knowledge|docs waiver|not needed|standard pattern)/i.test(text || "");
}

function statusForSpecialist(statusText, specialist) {
  const re = new RegExp(`^[-*]\\s*${escapeRegExp(specialist)}\\s*:\\s*([^\\r\\n]+)$`, "im");
  const match = (statusText || "").match(re);
  return match ? match[1].trim() : "";
}

function testConfig(workspace) {
  const text = readText(path.join(workspace, "config.yaml"));
  if (!text) return;
  for (const key of ["schema_version:", "system:", "roots:", "workspace:", "target_project:", "runtime:", "workflow:", "artifacts:", "execution:", "exports:"]) {
    uniqueLineKey(text, key, "config.yaml top-level key");
  }
  const target = text.match(/^target_project:\r?\n([\s\S]*?)(?=^\S|\z)/m)?.[1] || "";
  if (target) for (const child of ["  name:", "  root:"]) uniqueLineKey(target, child, "config.yaml target_project child key");
  const workflow = text.match(/^workflow:\r?\n([\s\S]*?)(?=^\S|\z)/m)?.[1] || "";
  if (workflow) for (const child of ["  scenario:", "  phase:"]) uniqueLineKey(workflow, child, "config.yaml workflow child key");
}

function testState(workspace) {
  const text = readText(path.join(workspace, "STATE.md"));
  if (!text) return;
  for (const field of ["Target project", "Target root", "Scenario", "Phase", "Active deliverable", "Active task", "Next action", "Current constraints", "Current risks", "Last updated"]) {
    const count = countMatches(text, new RegExp(`^- ${escapeRegExp(field)}:`, "gm"));
    if (count !== 1) fail(`STATE.md field '${field}' must appear exactly once, found ${count}`);
  }
  if (text.includes("2026-04-21")) warn("STATE.md contains stale date 2026-04-21; use the runtime current date.");
}
function testRegistry() {
  const scriptDir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(.:\/)/, "$1"));
  const systemRoot = path.dirname(scriptDir);
  const registryPath = path.join(systemRoot, "system", "agents", "registry.yaml");
  const registry = readText(registryPath);
  if (!registry) return;

  const nativeDirMatch = registry.match(/native_agent_dir:\s*([^\r\n]+)/);
  const nativeDir = nativeDirMatch ? nativeDirMatch[1].trim() : ".opencode/agents";
  const operationalRoot = path.dirname(systemRoot);
  const nativeAgentDir = path.resolve(operationalRoot, nativeDir);
  const hasNativeDir = fs.existsSync(nativeAgentDir);

  if (/invocation_mode:\s*(native|native-or-adapted)/.test(registry) && !hasNativeDir) {
    fail(`registry.yaml declares native agent invocation but native agent dir is missing: ${nativeAgentDir}`);
  }

  const agentsStart = registry.search(/^agents:\s*$/m);
  const agentsText = agentsStart >= 0 ? registry.slice(agentsStart).replace(/^agents:\s*\r?\n/, "") : "";
  if (!agentsText.trim()) fail("registry.yaml missing agents section");
  const agentBlocks = [];
  const headerRegex = /^  ([a-zA-Z0-9_-]+):\s*$/gm;
  const headers = [...agentsText.matchAll(headerRegex)];
  for (let i = 0; i < headers.length; i += 1) {
    const name = headers[i][1];
    const start = headers[i].index + headers[i][0].length;
    const end = i + 1 < headers.length ? headers[i + 1].index : agentsText.length;
    agentBlocks.push([name, agentsText.slice(start, end)]);
  }
  for (const [name, block] of agentBlocks) {
    const file = block.match(/file:\s*([^\r\n]+)/)?.[1]?.trim();
    const mode = block.match(/invocation_mode:\s*([^\r\n]+)/)?.[1]?.trim();
    const opencodeAgent = block.match(/opencode_agent:\s*([^\r\n]+)/)?.[1]?.trim();
    if (!file) fail(`registry.yaml agent '${name}' missing file`);
    else if (!fs.existsSync(path.join(systemRoot, file))) fail(`registry.yaml agent '${name}' file not found: ${file}`);
    if (!mode) fail(`registry.yaml agent '${name}' missing invocation_mode`);
    if (mode === "adapter" && /opencode_agent:\s*/.test(block)) warn(`registry.yaml agent '${name}' is adapter mode but still declares opencode_agent; remove it or switch to native only when registered.`);
    if (/^(native|native-or-adapted)$/.test(mode || "")) {
      if (!opencodeAgent) fail(`registry.yaml agent '${name}' uses ${mode} but is missing opencode_agent`);
      else {
        const nativeFile = path.join(nativeAgentDir, `${opencodeAgent}.md`);
        if (!fs.existsSync(nativeFile)) fail(`registry.yaml agent '${name}' points to missing native OpenCode agent: ${nativeFile}`);
        else {
          const nativeText = readText(nativeFile);
          const canonicalFile = path.join(systemRoot, file);
          const canonicalText = readText(canonicalFile);
          if (!/^---\s*[\s\S]*?^---\s*/m.test(nativeText)) fail(`Native OpenCode agent '${opencodeAgent}' missing markdown frontmatter: ${nativeFile}`);
          if (!/^description:\s*.+$/m.test(nativeText)) fail(`Native OpenCode agent '${opencodeAgent}' missing required description frontmatter: ${nativeFile}`);
          if (!/^mode:\s*subagent\s*$/m.test(nativeText)) fail(`Native OpenCode agent '${opencodeAgent}' must use mode: subagent: ${nativeFile}`);
          if (!/^permission:\s*$/m.test(nativeText)) warn(`Native OpenCode agent '${opencodeAgent}' should use permission frontmatter instead of deprecated tools: ${nativeFile}`);
          const readOnlyNative = /^\s*edit:\s*deny\s*$/m.test(nativeText);
          if (readOnlyNative && !/##\s+Artifact Persistence Boundary/m.test(nativeText)) {
            fail(`Native OpenCode agent '${opencodeAgent}' is read-only but missing ## Artifact Persistence Boundary: ${nativeFile}`);
          }
          if (readOnlyNative && nativeAgentImproperArtifactAuthorship(nativeText)) {
            fail(`Native OpenCode agent '${opencodeAgent}' is read-only but still implies final artifact authorship: ${nativeFile}`);
          }
          if (readOnlyNative && !/##\s+Artifact Persistence Boundary/m.test(canonicalText)) {
            fail(`Canonical specialist '${name}' is paired with a read-only native agent but missing ## Artifact Persistence Boundary: ${canonicalFile}`);
          }
        }
      }
    }
  }
}

function resolveTaskPath(workspace, taskArg) {
  if (!taskArg) return null;
  if (path.isAbsolute(taskArg) && fs.existsSync(taskArg)) return taskArg;
  const taskDir = path.join(workspace, "execution", "tasks");
  for (const candidate of [path.join(taskDir, taskArg), path.join(taskDir, `${taskArg}.md`)]) {
    if (fs.existsSync(candidate)) return candidate;
  }
  fail(`Task not found: ${taskArg}`);
  return null;
}

function testTask(taskPath) {
  if (!taskPath) return;
  const text = readText(taskPath);
  if (!text) return;
  const required = ["Task ID", "Title", "Scenario", "Phase", "Objective", "Why Now", "Owner Specialist", "Supporting Specialists", "Inputs", "Allowed Scope", "Out of Scope", "Target Project Root", "Target Surfaces", "Architecture Boundaries", "Standards Preflight", "Documentation Preflight", "Verification Plan", "Constraints", "Done Criteria", "Evidence Required", "Review Gate", "Drift Risks"];
  for (const heading of required) {
    if (!new RegExp(`^##\\s+${escapeRegExp(heading)}\\s*$`, "m").test(text)) fail(`Task '${taskPath}' missing required section: ## ${heading}`);
  }
  const canonical = canonicalSpecialists();
  const spec = taskSpecialists(text);
  if (!spec.owner) fail(`Task '${taskPath}' has empty Owner Specialist`);
  else if (/[+,\/]|\band\b|\be\b/i.test(spec.owner)) fail(`Task '${taskPath}' Owner Specialist must be one canonical specialist, not a composite value: ${spec.owner}`);
  else if (!canonical.has(spec.owner.toLowerCase())) fail(`Task '${taskPath}' uses unknown Owner Specialist: ${spec.owner}`);
  if (hasInlineSpecialistDecoration(spec.ownerRaw)) {
    fail(`Task '${taskPath}' Owner Specialist must use a canonical specialist name only, without inline decoration: ${spec.ownerRaw}`);
  }
  for (const support of spec.supporting) {
    if (!canonical.has(support.toLowerCase())) fail(`Task '${taskPath}' uses unknown Supporting Specialist: ${support}`);
  }
  for (const rawSupport of spec.supportingRaw || []) {
    if (hasInlineSpecialistDecoration(rawSupport)) {
      fail(`Task '${taskPath}' Supporting Specialist must use a canonical specialist name only, without inline decoration: ${rawSupport}`);
    }
  }
    const standards = section(text, "Standards Preflight");
  const documentation = section(text, "Documentation Preflight");
  const architecture = section(text, "Architecture Boundaries");
  const tokenConstraints = section(text, "Design-System / Token Constraints");
  for (const requiredStandard of requiredStandardsForSpecialists(spec)) {
    if (!containsPathEvidence(standards, requiredStandard)) {
      fail(`Task '${taskPath}' Standards Preflight missing required specialist standard: ${requiredStandard}`);
    }
  }
  if (spec.owner && spec.owner !== "none" && !new RegExp(`system/agents/${escapeRegExp(spec.owner)}\\.md`, "i").test(standards)) {
    warn(`Task '${taskPath}' Owner Specialist '${spec.owner}' should be listed in Standards Preflight as system/agents/${spec.owner}.md`);
  }
  for (const support of spec.supporting) {
    if (!new RegExp(`system/agents/${escapeRegExp(support)}\\.md`, "i").test(standards)) {
      warn(`Task '${taskPath}' Supporting Specialist '${support}' should be listed in Standards Preflight as system/agents/${support}.md or explicitly waived.`);
    }
  }
  if (touchesDocumentationSensitiveBehavior(text) && !hasDocumentationEvidence(documentation)) {
    fail(`Task '${taskPath}' touches framework/library/API/database/styling behavior but Documentation Preflight lacks Context7, official docs, local docs, or an explicit waiver.`);
  }
  const bootstrapTouched = /(bootstrap|setup|scaffold|create-next-app|next\.?js 1[45]|app router|tailwind|shadcn|framework config|project scaffold)/i.test(text);
  const architectureText = `${architecture}\n${section(text, "Constraints")}\n${section(text, "Target Surfaces")}`;
  if (bootstrapTouched && /(next\.?js|react|tailwind|shadcn|app router)/i.test(text)) {
    const hasRecommendedShape = /(src\/app\/\(web\)|src\/app\/api|src\/web|src\/server|src\/db|src\/shared)/i.test(architectureText);
    const hasShapeWaiver = /(established convention|existing convention|architecture waiver|shape waiver|justified convention|equivalent structure)/i.test(architectureText);
    if (!hasRecommendedShape && !hasShapeWaiver) {
      fail(`Task '${taskPath}' bootstraps a web application but does not choose the recommended src/app/(web)+api+web+server+db+shared shape or explicitly justify an equivalent convention.`);
    }
  }
  const uiSensitive = /(ui|design-system|token|theme|visual|styling|css|tailwind|component)/i.test(text);
  if (uiSensitive) {
    if (!tokenConstraints) fail(`Task '${taskPath}' touches UI/design-system work but is missing required section: ## Design-System / Token Constraints`);
    if (tokenConstraints && !/semantic token/i.test(tokenConstraints)) {
      fail(`Task '${taskPath}' touches UI/design-system work but does not explicitly preserve semantic-token consumption rules.`);
    }
    if (tokenConstraints && !/(raw values?|hex)/i.test(tokenConstraints)) {
      warn(`Task '${taskPath}' should explicitly prohibit raw-value or direct hex usage in product UI.`);
    }
    if (tokenConstraints && !/primitive/i.test(tokenConstraints)) {
      warn(`Task '${taskPath}' should explicitly say whether primitive tokens may be consumed directly in product UI.`);
    }
  }
  if (touchesDocumentationSensitiveBehavior(text) && genericWaiver(documentation) && !/version-insensitive|version insensitive|low-risk|low risk|bounded step/i.test(documentation)) {
    fail(`Task '${taskPath}' uses generic documentation waiver language for runtime-sensitive or framework-sensitive work.`);
  }
  const frontendTouched = /(frontend|ui|react|next\.?js|page|component|screen|tailwind|css)/i.test(text);
  const backendTouched = /(backend|api|database|auth|server|prisma|route handler|repository|use-case|validation)/i.test(text);
  if (frontendTouched && backendTouched) {
    if (!/(web|frontend|page\/route|screen|component|hook|adapter)/i.test(architecture) || !/(api|server|backend|route\/controller|validation|use-case|repository|database|db)/i.test(architecture)) {
      fail(`Task '${taskPath}' touches both frontend and backend/API concerns but Architecture Boundaries does not explicitly name both web/frontend and api/server/backend layers.`);
    }
  }
  const verificationPlan = section(text, "Verification Plan");
  const devServerEvidence = `${verificationPlan}\n${section(text, "Done Criteria")}\n${section(text, "Evidence Required")}`;
  if (/npm\s+run\s+dev/i.test(devServerEvidence) && !/(timeout\s+6\s+npm\s+run\s+dev|Start-Process|background process|managed background|kill|Stop-Process)/i.test(devServerEvidence)) {
    fail(`Task '${taskPath}' references npm run dev without a 6-second timeout or managed background cleanup in Verification Plan/Done Criteria/Evidence Required.`);
  }
  if (/MVP Implementation|MVP completo|landing page completa|Setup do Projeto/i.test(text)) warn(`Task '${taskPath}' may be too broad. Check bootstrap/design/feature mixing.`);
  if (/backend|api|database|auth|prisma|postgres/i.test(text) && !/validation|validator|use-case|repository|ownership|authorization|error/i.test(text)) {
    warn(`Task '${taskPath}' mentions backend/API/database/auth but may lack backend architecture boundaries.`);
  }
}

function findTaskById(workspace, taskId) {
  if (!taskId) return null;
  const taskDir = path.join(workspace, "execution", "tasks");
  if (!fs.existsSync(taskDir)) return null;
  for (const entry of fs.readdirSync(taskDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "README.md") continue;
    const full = path.join(taskDir, entry.name);
    const text = readText(full);
    if (new RegExp(`^##\\s+Task ID\\s*\\r?\\n\\s*${escapeRegExp(taskId.trim())}\\s*$`, "m").test(text)) return full;
  }
  return null;
}

function reviewExistsForTask(workspace, taskId) {
  if (!taskId) return false;
  const dir = path.join(workspace, "execution", "reviews");
  if (!fs.existsSync(dir)) return false;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "README.md") continue;
    const text = readText(path.join(dir, entry.name));
    if (firstLine(section(text, "Task ID")).toLowerCase() === taskId.toLowerCase()) return true;
    if (entry.name.toLowerCase().includes(taskId.toLowerCase())) return true;
  }
  return false;
}

function testLedgers(workspace) {
  const dir = path.join(workspace, "execution", "ledgers");
  if (!fs.existsSync(dir)) { fail(`Missing ledgers directory: ${dir}`); return; }
  const requiredLedgerSections = [
    "Ledger ID", "Task ID", "Scenario", "Execution Date", "Executor",
    "Owner Specialist Required", "Owner Specialist Invoked", "Supporting Specialists Invoked",
    "Supporting Specialist Status", "Runtime Target Used", "Specialist Result Strength", "Specialist Material Contribution",
    "Architecture Preflight", "Standards Applied", "Documentation Preflight", "Inputs Used", "Files Touched",
    "Commands Run", "Tooling Deviations", "Evidence Produced", "Done Criteria Status",
    "Scope Confirmation", "Drift Warnings", "Result", "Review Handoff"
  ];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "README.md") continue;
    const full = path.join(dir, entry.name);
    const text = readText(full);

    for (const required of requiredLedgerSections) {
      if (!new RegExp(`^##\\s+${escapeRegExp(required)}\\s*$`, "m").test(text)) {
        fail(`Ledger '${entry.name}' missing required section: ## ${required}`);
      }
    }

    if (/^##\s+Task Title\s*$/m.test(text) || /^##\s+Status\s*$/m.test(text) || /^##\s+Summary\s*$/m.test(text) || /^\*\*Status:\*\*/m.test(text)) {
      fail(`Ledger '${entry.name}' appears to use a legacy summary format. Use system/contracts/LEDGER_ENTRY.md exactly.`);
    }

    const resultCount = countMatches(text, /^##\s+Result\s*$/gm);
    if (resultCount !== 1) fail(`Ledger '${entry.name}' must have exactly one final ## Result section, found ${resultCount}`);

    const taskId = firstLine(section(text, "Task ID"));
    if (!taskId) fail(`Ledger '${entry.name}' has empty Task ID`);
    const taskPath = findTaskById(workspace, taskId);
    if (!taskPath) fail(`Ledger '${entry.name}' references task '${taskId}', but no materialized task contract exists under execution/tasks/`);
    if (taskId && !reviewExistsForTask(workspace, taskId)) fail(`Ledger '${entry.name}' has no matching review report for task '${taskId}' under execution/reviews/`);

        const spec = taskPath ? taskSpecialists(readText(taskPath)) : null;
    const requiredStandards = spec ? requiredStandardsForSpecialists(spec) : [];
    const ownerRequired = firstLine(section(text, "Owner Specialist Required"));
    const ownerInvoked = firstLine(section(text, "Owner Specialist Invoked"));
    const strength = firstLine(section(text, "Specialist Result Strength"));
    const result = firstLine(section(text, "Result"));
    const material = section(text, "Specialist Material Contribution");
    const supportStatus = section(text, "Supporting Specialist Status");
    const arch = section(text, "Architecture Preflight");
    const documentation = section(text, "Documentation Preflight");
    const commands = section(text, "Commands Run");
    const evidence = section(text, "Evidence Produced");
        const done = section(text, "Done Criteria Status");
    const standardsApplied = section(text, "Standards Applied");
    for (const requiredStandard of requiredStandards) {
      if (!containsPathEvidence(`${standardsApplied}\n${material}\n${arch}`, requiredStandard)) {
        fail(`Ledger '${entry.name}' missing evidence that required standard was applied: ${requiredStandard}`);
      }
    }

    if (!/node\s+.*validate-ai-dev\.mjs/i.test(`${commands}\n${evidence}`)) {
      fail(`Ledger '${entry.name}' must record automatic Node validator execution in Commands Run or Evidence Produced.`);
    }

    if (result === "implemented" && !/(--all|-a)(\s|$)/i.test(`${commands}\n${evidence}`)) {
      fail(`Ledger '${entry.name}' cannot be implemented without recording final full workspace validation using --all.`);
    }

    if (taskPath && touchesDocumentationSensitiveBehavior(readText(taskPath)) && !hasDocumentationEvidence(documentation)) {
      fail(`Ledger '${entry.name}' task touches framework/library/API/database/styling behavior but Documentation Preflight lacks Context7, official docs, local docs, or explicit waiver evidence.`);
    }

    for (const support of spec?.supporting || []) {
      const status = statusForSpecialist(supportStatus, support);
      if (!status) {
        fail(`Ledger '${entry.name}' missing Supporting Specialist Status entry for task-declared specialist '${support}'.`);
        continue;
      }
      if (!/(invoked-native|invoked-adapted|waived-with-reason|not-needed-after-owner-analysis|unavailable|failed)/i.test(status)) {
        fail(`Ledger '${entry.name}' has invalid Supporting Specialist Status for '${support}': ${status}`);
      }
      if (/invoked-(native|adapted)/i.test(status) && !new RegExp(`system/agents/${escapeRegExp(support)}\\.md`, "i").test(`${supportStatus}\n${material}\n${arch}`)) {
        fail(`Ledger '${entry.name}' says supporting specialist '${support}' was invoked but does not cite system/agents/${support}.md in status, material contribution, or architecture preflight.`);
      }
      if (result === "implemented" && /(unavailable|failed)/i.test(status)) {
        fail(`Ledger '${entry.name}' cannot be implemented while supporting specialist '${support}' status is '${status}'. Use partially-implemented/retry or an explicit waiver.`);
      }
    }

    if (/npm run dev/i.test(done) && !/npm run dev/i.test(`${commands}\n${evidence}`)) {
      fail(`Ledger '${entry.name}' marks npm run dev as done but does not record npm run dev evidence.`);
    }

    if (/npm run dev/i.test(`${commands}\n${evidence}`) && !/(timeout\s+6\s+npm\s+run\s+dev|Start-Process|background process|managed background|kill|Stop-Process)/i.test(`${commands}\n${evidence}`)) {
      fail(`Ledger '${entry.name}' records npm run dev without a 6-second timeout or managed background process cleanup.`);
    }

    if (spec?.owner && spec.owner !== "none") {
      if (!ownerRequired || ownerRequired === "none") fail(`Ledger '${entry.name}' does not record required owner specialist from task: ${spec.owner}`);
      else if (ownerRequired.toLowerCase() !== spec.owner.toLowerCase()) fail(`Ledger '${entry.name}' owner specialist mismatch. Task requires '${spec.owner}' but ledger says '${ownerRequired}'`);
    }

    const requiresOwner = ownerRequired && !/^(none|not-needed|n\/a|na)$/i.test(ownerRequired);
    if (requiresOwner) {
      if (!/^(yes|native|adapted|native-specialist-execution|adapted-specialist-execution)$/i.test(ownerInvoked)) {
        fail(`Ledger '${entry.name}' requires owner specialist '${ownerRequired}' but Owner Specialist Invoked is not affirmative: '${ownerInvoked}'`);
      }
      if (!material || /^\s*(none|n\/a|not needed|not-needed)\s*$/i.test(material)) fail(`Ledger '${entry.name}' requires ## Specialist Material Contribution for owner specialist '${ownerRequired}'`);
      if (!new RegExp(`system/agents/${escapeRegExp(ownerRequired)}\\.md`, "i").test(`${material}\n${arch}`)) fail(`Ledger '${entry.name}' must cite the owner specialist file used: system/agents/${ownerRequired}.md`);
        if (result === "implemented" && !/^(native-specialist-execution|adapted-specialist-execution)$/.test(strength)) {
        fail(`Ledger '${entry.name}' cannot be implemented with owner specialist '${ownerRequired}' unless Specialist Result Strength is native-specialist-execution or adapted-specialist-execution. Found '${strength}'`);
      }
    }
  }
}
function testReviews(workspace) {
  const dir = path.join(workspace, "execution", "reviews");
  if (!fs.existsSync(dir)) { fail(`Missing reviews directory: ${dir}`); return; }
  const requiredReviewSections = [
    "Review ID", "Task ID", "Ledger Reviewed", "Reviewer", "Review Date", "Evidence Inspected",
    "Acceptance Criteria Result", "Scope Result", "Specialist Honesty Result", "Documentation Evidence Result",
    "Architecture Compliance Result", "Issues Found", "Decision", "Retry Guidance", "Follow-Up Notes", "State Recommendation"
  ];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "README.md") continue;
    const text = readText(path.join(dir, entry.name));
    for (const required of requiredReviewSections) {
      if (!new RegExp(`^##\\s+${escapeRegExp(required)}\\s*$`, "m").test(text)) {
        fail(`Review '${entry.name}' missing required section: ## ${required}`);
      }
    }
    const decisionCount = countMatches(text, /^##\s+Decision\s*$/gm);
    if (decisionCount !== 1) fail(`Review '${entry.name}' must have exactly one Decision section, found ${decisionCount}`);
    const decision = firstLine(section(text, "Decision"));
    const acceptance = section(text, "Acceptance Criteria Result");
    const specialistHonesty = firstLine(section(text, "Specialist Honesty Result"));
    const documentationEvidence = firstLine(section(text, "Documentation Evidence Result"));
    const architectureCompliance = firstLine(section(text, "Architecture Compliance Result"));
    const evidenceInspected = section(text, "Evidence Inspected");
    if (/^accepted$/i.test(decision) && /\b(fail|not-inspected|partial)\b/i.test(acceptance)) {
      fail(`Review '${entry.name}' cannot be accepted while Acceptance Criteria Result contains fail, partial, or not-inspected.`);
    }
    if (/^accepted$/i.test(decision) && /^(overstated|incomplete)$/i.test(specialistHonesty)) {
      fail(`Review '${entry.name}' cannot be accepted while Specialist Honesty Result is ${specialistHonesty}.`);
    }
    if (/^accepted$/i.test(decision) && /^missing$/i.test(documentationEvidence)) {
      fail(`Review '${entry.name}' cannot be accepted while Documentation Evidence Result is missing.`);
    }
    if (/^accepted$/i.test(decision) && /^(fail|partial)$/i.test(architectureCompliance)) {
      fail(`Review '${entry.name}' cannot be accepted while Architecture Compliance Result is ${architectureCompliance}.`);
    }
    const strongRuntimeClaims = /(responsive verified|accessibility verified|visual polish verified|no cls|works in the browser)/i.test(text);
    const directRuntimeEvidence = /(screenshot|viewport|browser|playwright|axe|lighthouse|runtime|trace|recording|video|audit)/i.test(evidenceInspected);
    if (strongRuntimeClaims && !directRuntimeEvidence) {
      fail(`Review '${entry.name}' makes strong runtime or visual claims without naming matching runtime evidence.`);
    }
    if (/code|build-review|frontend|backend|api|database|ui|motion/i.test(`${evidenceInspected}\n${acceptance}`) && !/(file|path|source|component|route|schema|page|ledger|review)/i.test(evidenceInspected)) {
      warn(`Review '${entry.name}' may be evaluating code work without naming concrete files or source surfaces in Evidence Inspected.`);
    }
  }
}

const args = parseArgs(process.argv.slice(2));
let workspace;
try {
  workspace = resolveExisting(args.workspace);
} catch (error) {
  console.error(`FAIL: ${error.message}`);
  process.exit(1);
}

testRegistry();
testConfig(workspace);
testState(workspace);
const taskPath = resolveTaskPath(workspace, args.task);
if (taskPath) testTask(taskPath);
if (args.all) {
  const taskDir = path.join(workspace, "execution", "tasks");
  if (fs.existsSync(taskDir)) {
    for (const entry of fs.readdirSync(taskDir, { withFileTypes: true })) {
      if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "README.md") testTask(path.join(taskDir, entry.name));
    }
  }
  testLedgers(workspace);
  testReviews(workspace);
}

if (warnings.length) {
  console.log("WARNINGS:");
  for (const message of warnings) console.log(`- ${message}`);
}
if (failures.length) {
  console.log("FAIL:");
  for (const message of failures) console.log(`- ${message}`);
  process.exit(1);
}
console.log("PASS: ai-dev-system validation passed.");
process.exit(0);




