---
name: Backend.Dev
description: Implement OpenAPI endpoints, Supabase schemas, realtime channels for the Gebeta restaurant ordering SaaS. Use this skill when building backend features, creating database schemas, or implementing realtime functionality. This skill ensures schema changes are backward compatible, event schemas are versioned, and contract tests pass.
---

# Backend.Dev SKILL

## Intent

Implement OpenAPI endpoints, Supabase schemas, realtime channels for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `data_model`: Database schema definition
- `event_contracts`: JSON Schema for realtime events
- `API_spec`: OpenAPI specification
- `latency_constraints`: Performance requirements (e.g., KDS latency <= 150ms)

## Outputs

- `SQL_migrations`: Database migration files
- `API_server`: OpenAPI-compliant server implementation
- `contract_tests`: Producer/consumer contract tests
- `realtime_subscriptions`: Realtime channel definitions
- `event_schemas`: Versioned event schema definitions

## Constraints & Rules

1. **Backward Compatibility**: Schema changes must be backward compatible or have migration path
2. **Event Versioning**: Publish event schema versions for all realtime events
3. **Contract Testing**: All endpoints must have contract tests
4. **Realtime Latency**: KDS updates must meet latency constraints
5. **Offline Sync**: Support offline-first architecture with sync queues

## Acceptance Checks

### Schema Quality
- [ ] Migration files are idempotent
- [ ] Schema changes are backward compatible
- [ ] Migration path documented for breaking changes
- [ ] Database constraints properly defined

### API Quality
- [ ] OpenAPI spec is complete and valid
- [ ] All endpoints have contract tests
- [ ] Error responses follow standard format
- [ ] Authentication/authorization implemented

### Realtime
- [ ] Event schemas are versioned
- [ ] Realtime channels properly secured
- [ ] Latency constraints met
- [ ] Offline sync implemented

### Testing
- [ ] Contract tests pass (producer/consumer)
- [ ] Integration tests cover critical flows
- [ ] Staging deploy passes smoke tests

## Example Invocation

```yaml
skill: Backend.Dev
version: 1.0.0
input:
  data_model: "docs/api/data-model.md"
  event_contracts: "docs/api/event-schemas.json"
  API_spec: "docs/api/openapi.yaml"
  latency_constraints:
    kds_update_ms: 150
    order_creation_ms: 500
```

## Workflow

1. **Review Data Model**: Analyze schema requirements
2. **Create Migrations**: Write SQL migration files
3. **Implement API**: Build OpenAPI-compliant endpoints
4. **Define Events**: Create realtime event schemas
5. **Write Contract Tests**: Implement producer/consumer tests
6. **Setup Realtime**: Configure Supabase realtime channels
7. **Test Integration**: Run smoke tests on staging

## Related SKILLS

- Triggered by: `Product.Planner`
- Provides input to: `Frontend.Dev`
- Triggers: `QA.Auto`, `Security.Gate`

## References

- API Contract: `docs/api/openapi.yaml`
- Data Model: `docs/api/data-model.md`
- Event Schemas: `docs/api/event-schemas.json`
- Coding Standards: `docs/standards/supabase.md`