# BUG LOG - ai-dev-system test

## 2026-04-21 - Agent architecture quality gaps

- Frontend execution allowed static styling inside JSX/TSX and ad hoc visual decisions instead of enforcing design-token/component boundaries.
- Frontend execution used GSAP/motion concepts without invoking `motion` as a real specialist and without verifying timing units or reduced-motion behavior.
- Backend risk remains high unless every API task names controller/route, validation, use case, repository, provider/gateway, auth/ownership, and persistence boundaries before implementation.
- Task contracts did not require an explicit product `Target Project Root`, allowing product code to be created inside the private workspace by mistake.
- Review evidence confused build success with UI/runtime quality; responsive behavior and console cleanliness require runtime or screenshot evidence, not build alone.

## 2026-04-21 - Orchestration and review truth gaps

- Planning allowed a feature task to become an implicit project bootstrap task when no product root/scaffold existed.
- Build/Review did not strongly block product writes when `Target Project Root` was unknown or pointed into the private workspace.
- Review allowed build success to stand in for runtime/UI evidence such as responsiveness, console cleanliness, visual quality, and animation behavior.
- Ledger/review records could retain stale contradictory final truth after repair, such as both `partially-implemented` and `implemented` or both `retry-required` and `accepted`.
- Tooling downgrade from `pnpm` to `npm` was not required to be recorded as execution truth.
- STATE was vulnerable to becoming a bug log or history dump instead of short operational memory.
