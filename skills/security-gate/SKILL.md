---
name: Security.Gate
description: Run static & dynamic security checks, dependency checks for the Gebeta restaurant ordering SaaS. Use this skill when performing security scans, reviewing code for vulnerabilities, or ensuring compliance. This skill blocks PRs on high/critical vulnerabilities without mitigation and ensures no secrets are in the codebase.
---

# Security.Gate SKILL

## Intent

Run static & dynamic security checks, dependency checks for the Gebeta restaurant ordering SaaS platform.

## Inputs

- `PR`: Pull request with code changes
- `build_artifact`: Built application or package
- `security_policy`: Security requirements and compliance standards
- `secrets_patterns`: Patterns for detecting secrets

## Outputs

- `security_report`: Comprehensive security scan results
- `remediation_suggestions`: Recommendations for fixing vulnerabilities
- `compliance_status`: Compliance check results
- `secrets_scan`: Results of secrets detection

## Constraints & Rules

1. **Block Critical**: Block PR on high/critical vulnerabilities without mitigation
2. **Secrets Detection**: No secrets in code repository
3. **Dependency Scanning**: Check all dependencies for known vulnerabilities
4. **Compliance**: Verify compliance with security standards (OWASP, etc.)
5. **Ethiopia Context**: Consider local data protection requirements

## Acceptance Checks

### Vulnerability Scanning
- [ ] SCA (Software Composition Analysis) scan completed
- [ ] No high/critical unmitigated vulnerabilities
- [ ] Medium vulnerabilities documented with mitigation plan
- [ ] Dependency versions up to date

### Secrets Detection
- [ ] No API keys in code
- [ ] No passwords in code
- [ ] No tokens in code
- [ ] No secrets in environment files committed

### Code Security
- [ ] Static analysis completed
- [ ] No SQL injection vulnerabilities
- [ ] No XSS vulnerabilities
- [ ] Proper authentication/authorization

### Compliance
- [ ] OWASP Top 10 mitigations in place
- [ ] Data encryption at rest and in transit
- [ ] Proper logging and audit trails
- [ ] GDPR/local privacy compliance

## Example Invocation

```yaml
skill: Security.Gate
version: 1.0.0
input:
  PR: ".github/workflows/pr-context.json"
  build_artifact: "dist/gebeta.tar.gz"
  security_policy: "docs/security/policy.md"
  secrets_patterns:
    - "api_key"
    - "password"
    - "secret"
    - "token"
```

## Workflow

1. **Scan Dependencies**: Run SCA to check for known vulnerabilities
2. **Static Analysis**: Analyze code for security issues
3. **Secrets Detection**: Scan for leaked secrets
4. **Dynamic Analysis**: Test running application for vulnerabilities
5. **Compliance Check**: Verify adherence to security standards
6. **Generate Report**: Create comprehensive security report
7. **Provide Remediation**: Suggest fixes for identified issues

## Related SKILLS

- Hooks into: All PRs via CI/CD
- Integrates with: `DevOps.SRE` for security monitoring
- Provides feedback to: All development SKILLS

## References

- Security Policy: `docs/security/policy.md`
- OWASP Guidelines: `docs/security/owasp.md`
- Secrets Management: `docs/security/secrets.md`
- Compliance: `docs/security/compliance.md`