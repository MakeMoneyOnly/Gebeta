---
name: Ops.Runbooks
description: Create runbooks, SLA docs, and incident playbooks for the Gebeta restaurant ordering SaaS. Use this skill when writing operational documentation, creating incident response procedures, or defining maintenance windows. This skill ensures each runbook ties to monitoring alerts and is tested on tabletop incidents.
---

# Ops.Runbooks SKILL

## Intent

Create runbooks, SLA docs, and incident playbooks for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `service_list`: List of services and their dependencies
- `SLOs`: Service Level Objectives
- `monitoring_alerts`: List of monitoring alerts and their IDs
- `frequency`: Maintenance and review frequency

## Outputs

- `runbook.md`: Operational runbook for each service
- `sla_doc.md`: Service Level Agreement documentation
- `incident_playbook.md`: Incident response procedures
- `on_call_rotation`: Suggested on-call rotation schedule
- `maintenance_windows`: Planned maintenance schedule

## Constraints & Rules

1. **Alert Integration**: Each runbook must tie to specific monitoring alert IDs
2. **Tested Procedures**: Runbooks must be tested on tabletop incidents
3. **Clear Steps**: Procedures must be step-by-step and unambiguous
4. **Rollback Plans**: Every action must have a rollback procedure
5. **Ethiopia Context**: Consider local time zones and business hours

## Acceptance Checks

### Runbook Quality
- [ ] Each runbook links to monitoring alert IDs
- [ ] Steps are clear and actionable
- [ ] Rollback procedures documented
- [ ] Escalation paths defined

### Incident Response
- [ ] Severity levels defined (P0, P1, P2, P3)
- [ ] Response time targets specified
- [ ] Communication templates provided
- [ ] Post-incident review process defined

### SLA Documentation
- [ ] SLOs clearly defined with metrics
- [ ] Error budgets calculated
- [ ] Consequences of SLO breaches documented
- [ ] Compensation policies defined

### Testing
- [ ] Runbooks tested on tabletop incidents
- [ ] Test results documented
- [ ] Runbooks updated based on test findings

## Example Invocation

```yaml
skill: Ops.Runbooks
version: 1.0.0
input:
  service_list:
    - name: order-service
      dependencies: ["database", "kds-service"]
    - name: kds-service
      dependencies: ["realtime", "database"]
  SLOs:
    - name: order_success_rate
      target: 0.995
      error_budget: 0.005
  monitoring_alerts:
    - id: alert-order-failure-rate
      service: order-service
  frequency:
    review: "monthly"
    tabletop: "quarterly"
```

## Workflow

1. **Analyze Services**: Review service list and dependencies
2. **Define SLOs**: Establish service level objectives
3. **Create Runbooks**: Write operational procedures for each service
4. **Design Incident Response**: Create incident playbooks
5. **Define SLA**: Document service level agreements
6. **Schedule Maintenance**: Plan maintenance windows
7. **Test Procedures**: Run tabletop incident exercises

## Related SKILLS

- Triggered by: `DevOps.SRE`
- Provides input to: `Maintenance.Scaler`
- Integrates with: Monitoring dashboards

## References

- SLOs: `docs/monitoring/slos.md`
- Monitoring: `docs/monitoring/dashboards.md`
- Incident Response: `docs/runbooks/incident-response.md`
- Maintenance: `docs/runbooks/maintenance.md`