---
name: DevOps.SRE
description: Provide IaC, CI/CD, observability, and runbooks for the Gebeta restaurant ordering SaaS. Use this skill when setting up infrastructure, creating deployment pipelines, configuring monitoring, or writing operational documentation. This skill ensures infrastructure is codified, deployments are automated with rollback capability, and secrets are properly managed.
---

# DevOps.SRE SKILL

## Intent

Provide IaC, CI/CD, observability, and runbooks for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `infra_requirements`: Infrastructure specifications
- `deployment_target`: Target environment (staging, production)
- `budget_constraints`: Cost limits and optimization goals
- `SLOs`: Service Level Objectives

## Outputs

- `IaC`: Terraform or CloudFormation templates
- `CI_pipelines`: GitHub Actions or similar CI/CD workflows
- `monitoring_dashboards`: Prometheus/Grafana dashboards
- `runbooks`: Operational runbooks and incident playbooks
- `SLO_definitions`: Service Level Objective specifications

## Constraints & Rules

1. **Infrastructure as Code**: All infrastructure must be codified
2. **Automated Deployments**: Enable canary deploys and rollback
3. **Secrets Management**: Use vault/params manager, no env vars in repo
4. **Observability**: All services must have metrics, logs, and traces
5. **Ethiopia Context**: Consider regional hosting and CDN for static assets

## Acceptance Checks

### Infrastructure
- [ ] IaC templates are valid and tested
- [ ] Infrastructure is reproducible
- [ ] Cost estimates within budget
- [ ] Regional considerations addressed

### CI/CD
- [ ] Pipeline runs successfully on staging
- [ ] Canary deployment configured
- [ ] Rollback strategy documented
- [ ] All SKILL gates integrated

### Monitoring
- [ ] Dashboards cover all critical metrics
- [ ] Alerts configured for SLO breaches
- [ ] Logs are centralized and searchable
- [ ] Tracing enabled for distributed systems

### Security
- [ ] Secrets managed via vault
- [ ] No secrets in code repository
- [ ] Network security rules defined
- [ ] Access controls implemented

## Example Invocation

```yaml
skill: DevOps.SRE
version: 1.0.0
input:
  infra_requirements: "docs/infra/requirements.md"
  deployment_target: "production"
  budget_constraints:
    monthly_max: 500
    region: "eu-west-1"
  SLOs:
    - name: order_success_rate
      target: 0.995
    - name: kds_latency_p99
      target_ms: 200
```

## Workflow

1. **Analyze Requirements**: Review infrastructure and deployment needs
2. **Design IaC**: Create Terraform/CloudFormation templates
3. **Setup CI/CD**: Configure deployment pipelines with gates
4. **Configure Monitoring**: Set up metrics, logs, and tracing
5. **Define SLOs**: Establish service level objectives
6. **Write Runbooks**: Create operational documentation
7. **Test Deployment**: Verify staging deployment

## Related SKILLS

- Integrates with: All SKILLS via CI/CD
- Provides input to: `Ops.Runbooks`, `Maintenance.Scaler`
- Hooks into: All PRs via CI gates

## References

- IaC Templates: `infra/terraform/`
- CI/CD Config: `.github/workflows/`
- Monitoring: `docs/monitoring/slos.md`
- Runbooks: `docs/runbooks/`