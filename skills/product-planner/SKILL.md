---
name: Product.Planner
description: Translate market goals into scoped PRDs, roadmaps, and acceptance criteria for the Gebeta restaurant ordering SaaS. Use this skill when planning new features, creating product requirements, or defining release plans. This skill produces measurable success metrics, lists assumptions and experiments, and maintains versioned documentation.
---

# Product.Planner SKILL

## Intent

Translate market goals into scoped PRDs, roadmaps, and acceptance criteria for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `hypothesis`: Market fit hypothesis or problem statement
- `user_research`: Path to user interviews, analytics snippets, or field notes
- `success_metrics`: List of measurable targets with baselines
- `constraint_tags`: Technical and operational constraints (e.g., offline-first, low-end-device, ethiopia-local)

## Outputs

- `PRD`: Product Requirements Document (YAML with front-matter)
- `backlog`: Prioritized feature backlog using RICE framework
- `release_plan`: Timeline and milestones for delivery

## Constraints & Rules

1. **Measurable Success Metrics**: Every PRD must include specific, measurable targets
2. **Assumptions Documentation**: List all assumptions and validation experiments
3. **Versioning**: All artifacts use semantic versioning (semver)
4. **Ethiopia Context**: Always consider local constraints in planning
5. **Offline-First**: Account for intermittent connectivity in all plans

## Acceptance Checks

### PRD Validation
- [ ] PRD contains owner field
- [ ] PRD contains mvp_release date
- [ ] PRD contains metrics section with targets
- [ ] PRD contains scope (must, should, won't)
- [ ] PRD contains user journeys
- [ ] PRD contains rollout plan

### Backlog Validation
- [ ] Backlog items have story_points
- [ ] Backlog items have risk assessments
- [ ] Backlog is prioritized using RICE or similar framework
- [ ] Each item links to PRD or ADR

### Release Plan Validation
- [ ] Timeline is realistic
- [ ] Dependencies are identified
- [ ] Rollback strategy is defined
- [ ] Success criteria are measurable

## Example Invocation

```yaml
skill: Product.Planner
version: 1.0.0
input:
  hypothesis: "QR menu + KDS reduces order latency by 30% for Ethiopian restaurants"
  user_research: "docs/ux/interviews-2025-01.md"
  success_metrics:
    - name: orders_per_shift
      target: 200
      baseline: 150
    - name: kds_latency_ms
      target: "<=150"
      baseline: 250
  constraint_tags:
    - offline-first
    - low-end-device
    - ethiopia-local
```

## Workflow

1. **Analyze Inputs**: Review hypothesis, research, and constraints
2. **Define Success Metrics**: Establish measurable targets
3. **Create PRD**: Write comprehensive product requirements document
4. **Prioritize Backlog**: Use RICE framework to rank features
5. **Plan Releases**: Define timeline and milestones
6. **Document Assumptions**: List all assumptions and validation experiments

## Related SKILLS

- Triggers: `UX.Researcher`, `Brand.Designer`
- Provides input to: `DesignSystem.Engineer`, `Frontend.Dev`, `Backend.Dev`

## References

- PRD Template: `docs/prd/template.md`
- ADR Template: `docs/adr/template.md`
- Ethiopia Considerations: `docs/ethiopia/considerations.md`