# CONTEXT7 POLICY

This file defines how the system should use Context7 as an external documentation evidence provider.

It exists to improve technical accuracy without turning external documentation into workflow authority.

---

## Role of Context7

Context7 is an approved external documentation evidence provider for:

- frameworks
- libraries
- SDKs
- APIs
- version-sensitive configuration surfaces
- implementation patterns tied to specific tool versions

Context7 is not:

- constitutional governance
- live project state
- a workflow controller
- a canonical project agent
- technical baseline authority by itself

---

## Required Usage Before Implementation

Context7 is **required** before implementation when all of the following are true:

1. the bounded implementation step depends on current or version-sensitive framework/library/API/config knowledge
2. the technical baseline is already authorized
3. code or configuration guidance is being produced

This is not optional decorative usage.

When these conditions are met, the system must use Context7 materially before producing implementation guidance.

If Context7 is unavailable when required, the system must:

- disclose that Context7 support was missing
- proceed conservatively without fabricating current knowledge
- not claim the implementation guidance is current if it was produced without Context7 verification

---

## Do Not Force It When Not Required

Do not use Context7 decoratively when the bounded step does not materially depend on current external documentation.

If the bounded step is purely logical reasoning, governance analysis, or non-technical work, Context7 is not required.

---

## Bounded Query Rule

When using Context7, keep the query tightly scoped to the actual need.

Prefer:

- the concrete library or framework name
- the relevant version when known
- the exact implementation or configuration question

Avoid unnecessary retrieval breadth.

---

## Authority Boundary Rule

Context7 may improve execution quality inside an already authorized bounded step.

It must not:

- authorize stage advancement
- authorize implementation by itself
- invent missing technical baselines
- widen scope beyond the active governed step
- become a substitute for the technical-baseline specialist

If baseline authority is still missing, Context7 does not solve that problem.

The technical-baseline specialist should be used to establish the baseline before Context7 is used for implementation verification.

---

## Material Usage Rule

Context7 must be used materially, not mentioned decoratively.

A correct usage pattern:

1. identify what specific framework, library, or API the implementation depends on
2. explicitly query Context7 for current documentation
3. use that documentation to inform the implementation guidance
4. disclose that Context7 was used when it materially shaped the output

An incorrect usage pattern:

- mention "Context7" without actually querying it
- produce implementation guidance without verifying against current documentation
- claim documentation support was used when it was not

---

## Disclosure Rule

If Context7 materially shaped the technical output, Claude should disclose honestly that external documentation support was used.

Disclosure should make clear:

- what was verified through Context7
- what version or current state was confirmed
- what remains unverified or uncertain

---

## Failure Rule

If Context7 is unavailable, ungrounded, or not cleanly useful for the current bounded need, Claude should:

- proceed without pretending that Context7 support was successfully used
- disclose the absence of Context7 verification
- not fabricate current documentation knowledge to fill the gap
- proceed conservatively with known-valid patterns when current verification is missing

---

## Final Rule

Context7 is an evidence multiplier, not an authority replacement.

It is required before implementation when technical accuracy depends on current documentation and the baseline is already authorized.

It is not a substitute for establishing the technical baseline.