---
name: UX.Researcher
description: Produce personas, journey maps, and interview syntheses for the Gebeta restaurant ordering SaaS. Use this skill when conducting user research, creating personas, mapping user journeys, or synthesizing interview data. This skill tags statements with confidence levels and localizes UX implications for Ethiopian context.
---

# UX.Researcher SKILL

## Intent

Produce personas, journey maps, and interview syntheses for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `raw_interviews`: Path to interview transcripts or notes
- `analytics_snippets`: Path to analytics data or usage patterns
- `field_notes`: Path to observational notes from restaurant visits
- `context`: Geographic and cultural context (e.g., ethiopia, urban/rural)

## Outputs

- `personas.json`: Structured persona definitions with goals and pain points
- `journey_maps`: User journey maps (SVG or text format)
- `pain_points`: Prioritized list of user pain points with severity ratings
- `research_synthesis`: Summary of key findings and insights

## Constraints & Rules

1. **Confidence Tagging**: Tag all statements with confidence level (low/med/high)
2. **Localization**: Consider Amharic/English language implications and cultural context
3. **Ethiopia Context**: Account for local restaurant operations, device constraints, and infrastructure
4. **Minimum Sample**: Require at least 5 interviews or simulated user segments
5. **Actionable Insights**: All findings must translate to actionable product decisions

## Acceptance Checks

### Research Quality
- [ ] Minimum 5 interviews or user segments analyzed
- [ ] All statements tagged with confidence levels
- [ ] Pain points prioritized by severity and frequency
- [ ] Journey maps include emotional states and touchpoints

### Localization
- [ ] Language considerations documented (Amharic/English)
- [ ] Cultural context integrated into personas
- [ ] Local restaurant operational realities considered

### Actionability
- [ ] Each insight has clear product implications
- [ ] Findings link to specific features or improvements
- [ ] Recommendations are prioritized and scoped

## Example Invocation

```yaml
skill: UX.Researcher
version: 1.0.0
input:
  raw_interviews: "docs/ux/interviews-2025-01.md"
  analytics_snippets: "docs/ux/analytics-q4-2024.md"
  field_notes: "docs/ux/field-visits-addis.md"
  context: ethiopia-urban
```

## Workflow

1. **Analyze Interviews**: Review and synthesize interview data
2. **Identify Patterns**: Find common themes, pain points, and behaviors
3. **Create Personas**: Develop representative user profiles
4. **Map Journeys**: Document end-to-end user experiences
5. **Prioritize Insights**: Rank findings by impact and confidence
6. **Document Context**: Capture Ethiopia-specific considerations

## Related SKILLS

- Triggered by: `Product.Planner`
- Provides input to: `Brand.Designer`, `DesignSystem.Engineer`

## References

- UX Rules: `docs/ux/rules.md`
- Ethiopia Considerations: `docs/ethiopia/considerations.md`
- Interview Template: `docs/ux/interview-template.md`