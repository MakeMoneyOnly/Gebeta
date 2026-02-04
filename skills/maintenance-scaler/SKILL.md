---
name: Maintenance.Scaler
description: Provide scaling plans, cost estimates, migration paths for the Gebeta restaurant ordering SaaS. Use this skill when planning infrastructure scaling, estimating costs, or designing migration strategies. This skill provides both horizontal and vertical scaling strategies with cost deltas.
---

# Maintenance.Scaler SKILL

## Intent

Provide scaling plans, cost estimates, migration paths for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `current_metrics`: Current system performance metrics
- `forecast`: Growth projections and traffic forecasts
- `budget`: Budget constraints and optimization goals
- `scaling_requirements`: Specific scaling needs or bottlenecks

## Outputs

- `scaling_playbook`: Comprehensive scaling strategy document
- `autoscaling_rules`: Configuration for automatic scaling
- `cost_analysis`: Detailed cost breakdown and projections
- `migration_plan`: Database or service migration strategy
- `capacity_plan`: Capacity planning recommendations

## Constraints & Rules

1. **Multiple Strategies**: Provide both horizontal and vertical scaling options
2. **Cost Transparency**: Include cost deltas for all scaling options
3. **Migration Safety**: Ensure migration plans have rollback procedures
4. **Ethiopia Context**: Consider regional infrastructure and CDN needs
5. **Performance Targets**: Maintain SLOs during scaling

## Acceptance Checks

### Scaling Strategy
- [ ] Horizontal scaling options provided
- [ ] Vertical scaling options provided
- [ ] Cost deltas calculated for each option
- [ ] Performance impact assessed

### Cost Analysis
- [ ] Current costs documented
- [ ] Projected costs for each scaling option
- [ ] Cost optimization opportunities identified
- [ ] ROI analysis provided

### Migration Plan
- [ ] Migration steps clearly defined
- [ ] Rollback procedure documented
- [ ] Data migration strategy specified
- [ ] Downtime estimated and minimized

### Autoscaling
- [ ] Scaling thresholds defined
- [ ] Scaling policies configured
- [ ] Monitoring alerts set up
- [ ] Testing procedures documented

## Example Invocation

```yaml
skill: Maintenance.Scaler
version: 1.0.0
input:
  current_metrics:
    orders_per_day: 1000
    concurrent_users: 50
    db_connections: 20
  forecast:
    orders_per_day_6mo: 5000
    concurrent_users_6mo: 250
  budget:
    monthly_max: 1000
    optimization_target: 0.2
  scaling_requirements:
    - database
    - api_servers
    - cdn
```

## Workflow

1. **Analyze Current State**: Review current metrics and infrastructure
2. **Forecast Growth**: Project future needs based on forecasts
3. **Design Strategies**: Create horizontal and vertical scaling plans
4. **Calculate Costs**: Estimate costs for each scaling option
5. **Plan Migrations**: Design safe migration strategies
6. **Configure Autoscaling**: Set up automatic scaling rules
7. **Document Playbook**: Create comprehensive scaling playbook

## Related SKILLS

- Triggered by: `DevOps.SRE`, `Ops.Runbooks`
- Provides input to: `Product.Planner` for capacity planning
- Integrates with: Monitoring dashboards

## References

- Current Metrics: `docs/monitoring/metrics.md`
- SLOs: `docs/monitoring/slos.md`
- Infrastructure: `infra/terraform/`
- Cost Analysis: `docs/ops/cost-analysis.md`