# RESEARCH SQUAD

This directory contains the modular internal research package.

Research in this system is a single canonical agent with structured sub-guidance layers, not multiple competing agents.

---

## Structure

- `research-agent.md` — canonical entry point and routing logic
- `README.md` — this file, module selection guidance
- `framing.md` — research framing and question formulation
- `market-landscape.md` — market patterns and ecosystem awareness
- `benchmark-patterns.md` — benchmark derivation and pattern extraction
- `competitor-analysis.md` — competitive reference analysis
- `journey-and-ux-signals.md` — user journey and UX signal detection
- `domain-operations.md` — domain operations and technical context research
- `differentiation-analysis.md` — differentiation and unique value research
- `insight-generation.md` — insight synthesis from research findings
- `decision-synthesis.md` — decision-ready synthesis output

---

## Module Selection

The controlling skill should load only the research sub-guidance layers that are materially relevant for the current bounded research pass.

### Not every research pass uses every layer

A research pass for a backend data pipeline project may only need:
- `framing.md`
- `domain-operations.md`
- `decision-synthesis.md`

A research pass for a user-facing SaaS product may need:
- `framing.md`
- `market-landscape.md`
- `benchmark-patterns.md`
- `competitor-analysis.md`
- `journey-and-ux-signals.md`
- `insight-generation.md`
- `decision-synthesis.md`

### Module loading rules

1. Start from the bounded research question, not from a preferred coverage pattern
2. Load `framing.md` first for every research pass
3. Add layers based on what materially affects the decision, not what makes research look comprehensive
4. Do not load all modules by default
5. When in doubt, load fewer focused modules rather than more diffuse ones

### Decision-relevant module selection

| Research target | Primary modules |
|-----------------|-----------------|
| Market positioning | framing, market-landscape, competitor-analysis, differentiation-analysis |
| UX/interface decisions | framing, journey-and-ux-signals, benchmark-patterns, insight-generation |
| Technical approach | framing, domain-operations, benchmark-patterns, decision-synthesis |
| Feature validation | framing, journey-and-ux-signals, competitor-analysis, insight-generation |
| Pricing/business model | framing, market-landscape, competitor-analysis, differentiation-analysis |
| Discovery clarification | framing, all layers often relevant |

---

## Canonical Identity Rule

- `research` remains the single canonical agent identity
- `system/agents/core/research-agent.md` is the entry point referenced in the registry
- sub-guidance files are not registered as separate agents
- sub-guidance files are loaded selectively by the controlling bounded skill
- do not register each submodule as its own canonical runtime agent

---

## Bounded Extraction Rule

The controlling skill must not blindly read every research subfile every time.

Only the materially relevant research sub-guidance should be loaded for the current bounded research pass.

This preserves bounded extraction discipline, not broad context dumping.

---

## Research Quality Standards

All research passes in this system should:

- start from a clear decision question
- bound scope before expanding investigation
- separate evidence from inference
- surface unknowns honestly
- produce synthesis, not raw accumulation
- translate findings into project or discovery implications

Research that increases volume without reducing ambiguity is not working well.

Research that treats plausible inference as confirmed fact is not working well.

Research that confuses platform feature breadth with user value is not working well.

---

## Honest Outcome Reporting

The system should be able to report one of these research outcomes honestly:

- **specialist materially succeeded** — canonical research agent invoked, relevant sub-guidance loaded, bounded extraction applied, synthesis produced
- **partial / behavioral specialist use** — some research activity happened, but bounded extraction or synthesis was incomplete
- **failed specialist execution** — research was attempted but routing, guidance loading, or synthesis failed
- **unavailable** — research is materially required but cannot be safely performed

Generic web search and synthesis alone do not automatically count as strong canonical research-specialist execution.

The research squad structure exists to make bounded specialist research operationally real, not just textually present.