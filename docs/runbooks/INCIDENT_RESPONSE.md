# Incident Response Runbook

This document provides procedures for responding to incidents affecting the BizOps Website.

## Incident Severity Levels

### P1 - Critical

- **Impact:** Complete service outage, security breach, data loss
- **Response Time:** 15 minutes
- **Resolution Target:** 2 hours
- **Examples:**
  - Website completely down
  - Data breach
  - Payment system compromised
  - 500 errors on all pages

### P2 - High

- **Impact:** Major feature degradation, partial outage
- **Response Time:** 1 hour
- **Resolution Target:** 4 hours
- **Examples:**
  - Contact forms not working
  - Calculator tools failing
  - Performance severely degraded (>10s load times)

### P3 - Medium

- **Impact:** Minor feature issues, workarounds available
- **Response Time:** 4 hours
- **Resolution Target:** 24 hours
- **Examples:**
  - Non-critical UI bugs
  - Minor styling issues
  - SEO metadata incorrect

### P4 - Low

- **Impact:** Cosmetic issues, enhancements
- **Response Time:** 24 hours
- **Resolution Target:** 72 hours
- **Examples:**
  - Typos
  - Minor visual inconsistencies

## Incident Response Team

| Role               | Primary          | Secondary           |
| ------------------ | ---------------- | ------------------- |
| Incident Commander | DevOps Lead      | Senior Developer    |
| Communications     | Product Manager  | DevOps Lead         |
| Technical Lead     | Senior Developer | Mid-level Developer |
| QA/Testing         | QA Engineer      | Any Developer       |

## Response Procedures

### 1. Detection

**Monitoring Sources:**

- Sentry error alerts
- Checkly monitoring
- Better Stack uptime alerts
- User reports (support@bizops.id)
- Social media mentions

**Alert Channels:**

- P1/P2: Phone + Slack #incidents
- P3: Slack #alerts
- P4: GitHub issues

### 2. Declaration

When an incident is detected:

1. **Declare Incident:** Create incident in incident management tool
2. **Set Severity:** Assess and set appropriate severity level
3. **Notify Team:** Alert on-call engineer via PagerDuty/Slack
4. **Create War Room:** Start Zoom/Slack huddle for P1/P2

### 3. Assessment

**Initial Questions:**

- What is the scope of impact?
- When did it start?
- What changed recently? (deployments, config changes)
- Can we reproduce the issue?
- Is there a workaround?

**Check These:**

- [ ] Vercel status page (https://status.vercel.com)
- [ ] Sentry error logs
- [ ] Recent deployments
- [ ] Database status (Neon)
- [ ] Third-party service status (Clerk, PostHog, Sentry)

### 4. Containment

**Immediate Actions:**

1. **If security breach:**
   - Revoke affected API keys immediately
   - Enable maintenance mode
   - Contact security team

2. **If performance issue:**
   - Check CDN status
   - Enable rate limiting
   - Scale resources if needed

3. **If functionality broken:**
   - Rollback to last known good deployment
   - Enable feature flags to disable broken features

**Rollback Commands:**

```bash
# Rollback Vercel deployment
vercel --rollback

# Or redeploy previous version
vercel --prod
```

### 5. Resolution

**Steps:**

1. Identify root cause
2. Implement fix
3. Test in staging
4. Deploy to production
5. Verify fix
6. Monitor for 30 minutes

### 6. Communication

**Timeline:**

- **T+0 min:** Initial acknowledgment (Slack #incidents)
- **T+15 min:** Status page update (if P1/P2)
- **T+30 min:** Progress update
- **Every 30 min:** Updates until resolved
- **Resolution:** Final update with post-mortem timeline

**Template - Initial Acknowledgment:**

```
🔴 INCIDENT DECLARED [P1/P2/P3] - [Brief Description]

Impact: [What's affected]
Started: [Time]
Status: Investigating
Updates: #incidents channel

Incident Commander: [Name]
```

**Template - Status Update:**

```
📊 INCIDENT UPDATE #[ID]

Status: [Investigating/Identified/Monitoring/Resolved]
Progress: [What we've found/done]
Next Update: [Time]
ETA: [When we expect resolution]
```

**Template - Resolution:**

```
✅ INCIDENT RESOLVED #[ID]

Duration: [X minutes]
Resolution: [Brief description of fix]
Root Cause: [Brief description]
Post-mortem: [Link to doc, due in 24h]
```

### 7. Post-Incident

**Within 24 hours:**

1. Write post-mortem document
2. Schedule post-mortem meeting
3. Create action items
4. Update runbooks if needed

**Post-Mortem Template:**
See [Post-Mortem Template](./POST_MORTEM_TEMPLATE.md)

## Common Scenarios

### Scenario 1: Website Completely Down

1. **Check:** Vercel dashboard for deployment status
2. **Check:** Domain DNS configuration
3. **Check:** Error monitoring (Sentry)
4. **Action:** Rollback to previous deployment
5. **Action:** Enable maintenance page if needed

### Scenario 2: Calculator Tools Not Working

1. **Check:** Browser console for errors
2. **Check:** API endpoints responding
3. **Action:** Disable specific tool via feature flag
4. **Action:** Deploy hotfix

### Scenario 3: Contact Form Not Sending

1. **Check:** Email service status (Resend/SendGrid)
2. **Check:** Form validation logic
3. **Action:** Implement temporary contact method
4. **Action:** Fix and deploy

### Scenario 4: Security Vulnerability Discovered

1. **Immediate:** Assess severity (CVSS score)
2. **Immediate:** Patch vulnerability
3. **Within 1 hour:** Deploy fix
4. **Within 24 hours:** Security audit
5. **Within 72 hours:** Public disclosure (if applicable)

### Scenario 5: Performance Degradation

1. **Check:** Lighthouse scores
2. **Check:** Core Web Vitals in Google Search Console
3. **Check:** Bundle size changes
4. **Action:** Enable aggressive caching
5. **Action:** Rollback recent changes
6. **Action:** Optimize assets

## Escalation Matrix

| Time Elapsed                | Action                          |
| --------------------------- | ------------------------------- |
| 15 min (P1) / 1 hour (P2)   | Escalate to engineering manager |
| 1 hour (P1) / 4 hours (P2)  | Escalate to CTO                 |
| 2 hours (P1) / 8 hours (P2) | Executive briefing              |

## Tools & Resources

**Monitoring:**

- Sentry: https://sentry.io/organizations/bizops/issues/
- Checkly: https://app.checklyhq.com/
- Better Stack: https://uptime.betterstack.com/
- Vercel Analytics: https://vercel.com/analytics

**Deployment:**

- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Actions: https://github.com/divistant-ai/bizops-website/actions

**Communication:**

- Slack: #incidents, #engineering
- Status Page: https://status.bizops.id
- Email: dev@bizops.id, security@bizops.id

**Documentation:**

- Architecture Docs: /docs/architecture/
- Deployment Guide: /docs/guides/DEPLOYMENT.md
- API Docs: /docs/API.md

## Contact Information

| Role              | Contact                |
| ----------------- | ---------------------- |
| Emergency Hotline | +62-XXX-XXXX-XXXX      |
| DevOps Lead       | devops@bizops.id       |
| Security Team     | security@bizops.id     |
| On-Call Engineer  | See PagerDuty rotation |

---

Last Updated: 2024-12-01
Review Cycle: Quarterly
