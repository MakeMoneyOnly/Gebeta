---
name: Brand.Designer
description: Create brand assets and token JSON for the Gebeta restaurant ordering SaaS. Use this skill when defining brand identity, creating color systems, establishing typography, or designing logos. This skill produces semantic tokens (not just hex values), ensures WCAG accessibility compliance, and optimizes for Ethiopia-specific constraints.
---

# Brand.Designer SKILL

## Intent

Create brand assets and token JSON for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `brand_values`: Core brand personality values (e.g., Trustworthy, Efficient, Local-first, Simple)
- `tone`: Tone of voice description
- `color_constraints`: Accessibility requirements (e.g., WCAG AA)
- `logo_request`: Description of logo concept
- `target_contexts`: List of contexts where brand will be used (menu, receipt, dashboard, KDS)

## Outputs

- `brand_book.md`: Comprehensive brand guidelines document
- `tokens.json`: Design tokens for colors, typography, spacing
- `logo_variants`: SVG logo files for different contexts
- `usage_examples`: Visual examples of brand application

## Constraints & Rules

1. **Semantic Tokens**: Use semantic names (e.g., `bg-surface`, `primary`, `danger`) not just hex values
2. **Accessibility**: Ensure WCAG AA compliance (4.5:1 contrast for body text)
3. **Ethiopia Optimization**: Test colors on low-end device simulation, prefer mid-contrast saturation
4. **Scalability**: Logo must work at small sizes (UI chips) and large sizes (marketing)
5. **Context-Specific**: Provide usage examples for all target contexts

## Acceptance Checks

### Token Quality
- [ ] All colors have semantic token names
- [ ] Contrast ratios meet WCAG AA standards
- [ ] Typography scale is complete (XS to XXL)
- [ ] Spacing system follows 4pt grid

### Accessibility
- [ ] All text colors pass 4.5:1 contrast test
- [ ] Color combinations tested for color blindness
- [ ] Minimum font size is 14px for mobile body text

### Ethiopia Optimization
- [ ] Colors tested on low-end device simulation
- [ ] Mid-contrast saturation preferred for bright light
- [ ] Large tappable targets (minimum 44px)

### Documentation
- [ ] Brand book includes usage examples
- [ ] Logo variants provided for all needed contexts
- [ ] Clear-space rules documented

## Example Invocation

```yaml
skill: Brand.Designer
version: 1.0.0
input:
  brand_values:
    - Trustworthy
    - Efficient
    - Local-first
    - Simple
  tone: "Clear, helpful, respectful, locally contextualized"
  color_constraints: "WCAG AA"
  logo_request: "Simple mark combining pot + fork or local coffee motif"
  target_contexts:
    - mobile-menu
    - thermal-receipt
    - merchant-dashboard
    - kds-display
```

## Workflow

1. **Define Brand Values**: Establish core brand personality
2. **Create Color System**: Develop semantic color tokens with accessibility checks
3. **Establish Typography**: Define type scale with legibility rules
4. **Design Logo**: Create scalable logo variants
5. **Document Usage**: Create brand book with examples
6. **Export Tokens**: Generate tokens.json for design system

## Related SKILLS

- Triggered by: `Product.Planner`
- Provides input to: `DesignSystem.Engineer`

## References

- Brand Book Template: `docs/design/brand-book-template.md`
- Token Specification: `docs/design/tokens-spec.md`
- Ethiopia Considerations: `docs/ethiopia/considerations.md`