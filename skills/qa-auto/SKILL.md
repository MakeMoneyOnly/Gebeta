---
name: QA.Auto
description: Generate and run tests (unit, integration, e2e, visual) for the Gebeta restaurant ordering SaaS. Use this skill when creating test suites, running automated tests, or generating test coverage reports. This skill ensures tests are generated for every PR touching src/, flaky tests are flagged, and no critical failures occur.
---

# QA.Auto SKILL

## Intent

Generate and run tests (unit, integration, e2e, visual) for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `PR_diff`: Pull request diff or changed files
- `storybook`: Storybook URL or build
- `API_spec`: OpenAPI specification
- `test_requirements`: Specific test requirements or scenarios

## Outputs

- `test_results`: Test run results with pass/fail status
- `flaky_test_report`: Report of unstable tests
- `coverage_report`: Code coverage metrics
- `visual_diff_report`: Visual regression comparison
- `test_suites`: Generated test files

## Constraints & Rules

1. **Test Generation**: Must generate tests for every PR touching src/
2. **Flaky Test Detection**: Flag and quarantine flaky tests
3. **Coverage Threshold**: Maintain minimum coverage (e.g., 80%)
4. **Visual Regression**: Compare against Storybook baseline
5. **Contract Testing**: Verify API contracts for backend changes

## Acceptance Checks

### Test Generation
- [ ] Tests generated for all changed files
- [ ] Tests cover happy path and edge cases
- [ ] Tests are maintainable and readable
- [ ] Tests follow testing standards

### Test Execution
- [ ] All tests pass (no critical failures)
- [ ] Coverage threshold met
- [ ] Visual diffs within tolerance
- [ ] Contract tests pass

### Flaky Tests
- [ ] Flaky tests identified and reported
- [ ] Flaky tests quarantined
- [ ] Root cause analysis documented

### Reporting
- [ ] Test results clearly communicated
- [ ] Coverage report generated
- [ ] Visual diff report available
- [ ] Recommendations for improvements

## Example Invocation

```yaml
skill: QA.Auto
version: 1.0.0
input:
  PR_diff: ".github/workflows/pr-diff.json"
  storybook: "http://localhost:6006"
  API_spec: "docs/api/openapi.yaml"
  test_requirements:
    - unit_tests
    - integration_tests
    - e2e_tests
    - visual_regression
```

## Workflow

1. **Analyze Changes**: Review PR diff to identify what needs testing
2. **Generate Tests**: Create unit, integration, and e2e tests
3. **Run Tests**: Execute all test suites
4. **Check Coverage**: Verify coverage thresholds
5. **Visual Regression**: Compare against Storybook baseline
6. **Identify Flaky Tests**: Detect and quarantine unstable tests
7. **Generate Report**: Create comprehensive test report

## Related SKILLS

- Triggered by: `Frontend.Dev`, `Backend.Dev`
- Integrates with: `DevOps.SRE` via CI/CD
- Provides feedback to: All development SKILLS

## References

- Testing Standards: `docs/standards/testing.md`
- E2E Testing Guide: `docs/standards/e2e-testing.md`
- Storybook Guide: `docs/design/storybook-guide.md`
- API Contract: `docs/api/openapi.yaml`