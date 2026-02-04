---
name: Frontend.Dev
description: Implement features using component library, produce tests and e2e scenarios for the Gebeta restaurant ordering SaaS. Use this skill when building frontend features, creating user interfaces, or implementing user flows. This skill ensures all code uses tokens and components from the design system, maintains test coverage, and produces e2e tests.
---

# Frontend.Dev SKILL

## Intent

Implement features using component library, produce tests and e2e scenarios for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `story_spec`: User story or feature specification
- `API_contract`: OpenAPI specification for backend endpoints
- `component_list`: List of available components from design system
- `PRD_reference`: Link to relevant PRD section

## Outputs

- `feature_branch`: Git branch with implementation
- `PR_description`: Pull request description with changes
- `storybook_stories`: Updated or new Storybook stories
- `e2e_tests`: End-to-end test scripts (Cypress/Playwright)
- `unit_tests`: Unit tests for new code

## Constraints & Rules

1. **Component-Only**: Use only tokens and components from design system
2. **New Component Request**: If new component needed, create via DesignSystem.Engineer SKILL
3. **Test Coverage**: Unit coverage >= 80% on new code
4. **E2E Tests**: Every feature must have e2e test coverage
5. **Offline-First**: Account for intermittent connectivity in all features

## Acceptance Checks

### Code Quality
- [ ] All UI uses tokens.json (no hard-coded values)
- [ ] Components from design system used exclusively
- [ ] TypeScript types are complete
- [ ] Code follows coding standards

### Testing
- [ ] Unit tests added for new code
- [ ] Test coverage >= 80%
- [ ] E2E tests cover critical user flows
- [ ] All tests pass

### Documentation
- [ ] Storybook story exists for new components
- [ ] Visual baseline updated
- [ ] PR description includes changes and rationale

### Ethiopia Context
- [ ] Offline sync implemented where needed
- [ ] Low-end device performance considered
- [ ] Large tappable targets (minimum 44px)

## Example Invocation

```yaml
skill: Frontend.Dev
version: 1.0.0
input:
  story_spec: "docs/prd/mvp/user-stories/ordering-flow.md"
  API_contract: "docs/api/openapi.yaml"
  component_list: "design/components/index.ts"
  PRD_reference: "docs/prd/mvp/prd-qr-kds.md"
```

## Workflow

1. **Review Requirements**: Analyze story spec and API contract
2. **Check Components**: Verify required components exist in design system
3. **Request New Components**: Use DesignSystem.Engineer SKILL if needed
4. **Implement Feature**: Build feature using components and tokens
5. **Write Tests**: Create unit and e2e tests
6. **Update Storybook**: Document new components or changes
7. **Create PR**: Submit pull request with description

## Related SKILLS

- Triggered by: `DesignSystem.Engineer`
- Requires: `DesignSystem.Engineer` for new components
- Triggers: `QA.Auto`, `Security.Gate`

## References

- Coding Standards: `docs/standards/react.md`
- API Contract: `docs/api/openapi.yaml`
- Component Library: `design/components/`
- E2E Testing Guide: `docs/standards/e2e-testing.md`