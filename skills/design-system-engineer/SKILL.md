---
name: DesignSystem.Engineer
description: Convert Figma tokens to code, produce Storybook stories and component templates for the Gebeta restaurant ordering SaaS. Use this skill when creating UI components, converting design tokens to code, or setting up Storybook. This skill ensures all components are accessible, themeable, responsive, and documented with usage examples.
---

# DesignSystem.Engineer SKILL

## Intent

Convert Figma tokens to code, produce Storybook stories and component templates for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `tokens.json`: Design tokens from Brand.Designer
- `figma_file_link`: Link to Figma design file
- `component_spec`: Component specification document (MD)
- `accessibility_requirements`: A11y requirements (e.g., WCAG AA, keyboard navigation)

## Outputs

- `token_css_vars`: CSS variables for runtime theming
- `tailwind_config`: Tailwind configuration with token mapping
- `storybook_stories`: Storybook stories for each component
- `component_code`: TypeScript React components with full typing
- `visual_baseline`: Snapshot tests for visual regression

## Constraints & Rules

1. **Token-First**: All components must use tokens from tokens.json, no hard-coded values
2. **Accessibility**: All components must support A11y props and pass axe-core scans
3. **Responsive**: Components must work across all breakpoints (xs, sm, md, lg)
4. **Documentation**: Every component must have Storybook story with usage examples
5. **Testing**: Export snapshot test and visual baseline for each component

## Acceptance Checks

### Component Quality
- [ ] Component uses tokens.json exclusively
- [ ] TypeScript types are complete and exported
- [ ] Component is responsive across all breakpoints
- [ ] Component supports theme switching

### Accessibility
- [ ] All interactive elements have ARIA labels
- [ ] Keyboard navigation works for all interactions
- [ ] Focus states are visible
- [ ] axe-core report has 0 critical violations

### Documentation
- [ ] Storybook story exists with multiple states
- [ ] Usage examples provided
- [ ] Props documented with TypeScript
- [ ] Visual baseline captured

### Testing
- [ ] Unit tests cover all component states
- [ ] Snapshot tests pass
- [ ] Visual regression tests configured

## Example Invocation

```yaml
skill: DesignSystem.Engineer
version: 1.0.0
input:
  tokens_json: "design/tokens.json"
  figma_file_link: "https://figma.com/file/gebeta-design-system"
  component_spec: "docs/design/components/button-spec.md"
  accessibility_requirements:
    - WCAG_AA
    - keyboard_navigation
    - screen_reader_support
```

## Workflow

1. **Parse Tokens**: Import and validate tokens.json
2. **Generate CSS Variables**: Create CSS variable definitions
3. **Configure Tailwind**: Map tokens to Tailwind utilities
4. **Create Component**: Build React component with TypeScript
5. **Write Storybook Story**: Document component with examples
6. **Add Tests**: Write unit and snapshot tests
7. **Run Accessibility Scan**: Verify with axe-core

## Related SKILLS

- Triggered by: `Brand.Designer`
- Provides input to: `Frontend.Dev`
- Gatekeeper for: All visual artifacts

## References

- Token Specification: `docs/design/tokens-spec.md`
- Component Template: `docs/design/component-template.md`
- Storybook Guide: `docs/design/storybook-guide.md`
- Coding Standards: `docs/standards/react.md`