# DeFi Legal Framework
**General Legal Requirements for Decentralized Exchanges**  
**Last Updated**: March 10, 2026

---

## Overview

This document outlines general legal compliance areas affecting DeFi frontends and protocols in the United States. For Welsh Street app-specific compliance, see `app-compliance-checklist.md`.

---

## 1. Securities Law (Howey Test)

**Law**: SEC v. W.J. Howey Co. (1946)  
**Four Elements** (all must be satisfied):
1. Investment of money
2. In a common enterprise
3. With reasonable expectation of profit
4. Derived from efforts of others

**Mitigation Strategies**:
- Eliminate capital raises (no ICO/presale)
- Immutable smart contracts (no admin control)
- Neutral messaging (no profit promises)
- Decentralized execution (no developer reliance)

### Element 4: Swap Fees as Revenue

**Critical Distinction**: Collecting swap fees is not inherently a securities violation. The issue is whether fees prove users depend on developer efforts for value.

**Legal Standard** (United Housing Foundation v. Forman, 1975):
- **Ministerial tasks**: Routine operations, maintenance, infrastructure → NOT "efforts of others"
- **Entrepreneurial efforts**: Active management, development affecting value → Triggers Element 4

**Lower Risk Scenarios**:
- Protocol is fully functional and immutable
- Fees fund operational costs only (hosting, security, compliance)
- Alternative access methods exist (public blockchain, other UIs)
- No roadmap or promises of value-driving development
- Social media promotes existing functionality, not future features
- Fees are algorithmic/protocol-generated, not developer-controlled

**Higher Risk Scenarios**:
- Users bought expecting team to build roadmap features
- Fees fund development that increases value
- Developer is sole practical access point
- Marketing emphasizes team expertise/vision
- Social posts promise future updates that will drive value

**SEC Digital Asset Framework (2019)**: "Does the purchaser reasonably expect [you] to undertake efforts to promote value or develop functionality?"

**Defensive Position**:
- Operational fees for ministerial infrastructure tasks
- Immutable protocol (shutdown doesn't break functionality)
- Neutral social media (describe what exists, not what's coming)
- No promises of future value-driving work

---

## 2. Money Transmission (MSB/State Licenses)

**Federal (FinCEN)**:
- MSB registration may be required under 31 USC § 5330
- Non-custodial DeFi exemption unclear
- Cost: Form 107 + ongoing AML/KYC compliance

**State Licenses**:
- 48+ states have money transmitter laws
- High-risk states: NY (BitLicense), CA, TX, WA
- Cost: $500k-$2M for multi-state compliance
- Timeline: 12-24 months

**Defensive Position**:
- Non-custodial architecture
- No fiat on/off ramps
- No access to user funds

### Revenue Extraction = Money Transmitter

**CRITICAL**: Transaction-based revenue triggers MSB classification, even if immutable.

**DO NOT extract per-swap revenue to developer wallets** - This creates money transmitter liability regardless of immutability.

**Compliant Revenue Models**:
1. **Token holdings** - Hold/sell tokens on secondary markets as market participant
2. **LP position** - Provide liquidity, earn fees like other users (no privileged treatment)
3. **Alternative services** - Consulting, grants, unrelated revenue streams

**Key Distinction**: Holding tokens = market participant. Extracting per-swap revenue = money transmitter.

---

## 3. OFAC Sanctions

**Requirement**: Block sanctioned countries and SDN wallet addresses  
**Penalties**: Up to $20M per violation + criminal prosecution  
**Precedent**: Tornado Cash (2022-2024)

**Minimum Compliance**:
1. Geo-blocking (Cuba, Iran, NK, Syria, Crimea, Donetsk, Luhansk)
2. Wallet address screening (12k+ SDN addresses)
3. Transaction monitoring
4. Recordkeeping (5+ years)

**Service Providers**: TRM Labs, Chainalysis, Elliptic ($10k-$100k/year)

---

## 4. Tax Reporting (IRS)

**Infrastructure Investment & Jobs Act (2021)**:
- Expanded "broker" definition (effective Jan 1, 2025)
- Form 1099-DA for digital asset proceeds
- Non-custodial exemption expected but not confirmed

**If Classified as Broker**:
- Collect user info (name, address, TIN)
- Issue Form 1099-DA annually
- Penalties: $280-$580 per missing form

---

## 5. Data Privacy

**GDPR (EU)**:
- Applies if accessible to EEA/UK/Swiss users
- Penalties: €20M or 4% revenue
- Requirements: Lawful basis, user rights, data minimization

**CCPA (California)**:
- Threshold: $25M revenue OR 50k+ CA consumers
- Penalties: Up to $7,500 per violation
- Rights: Know, delete, opt-out of sale

---

## 6. Consumer Protection (FTC)

**Standard**: No unfair or deceptive practices  
**Prohibited Claims**:
- Guaranteed returns
- Risk-free
- Specific price predictions

**Required Disclosures**:
- Clear fee structures
- Risk warnings
- No false advertising

---

## 7. Forbidden Marketing Terms

**Securities Law Red Flags** (avoid in user-facing content):
- earn / earning / earnings
- harvest / harvesting
- accrue / accruing
- entitled to
- grow your portfolio
- expand your position
- generate revenue
- investment opportunity
- profit from
- maximize returns

**Acceptable**: Protocol mechanics, technical descriptions, brand personality (without profit framing)

---

## 8. Other Compliance Areas

**CFTC (Commodities)**: Spot AMM = low risk; no derivatives  
**Export Controls**: Standard encryption = exempt  
**ADA (Accessibility)**: WCAG 2.1 AA recommended  
**IP/Trademark**: Conduct searches before launch  

---

## Summary Risk Levels

| Area | Typical Risk | Cost |
|------|-------------|------|
| Securities (Howey) | High → Low (with mitigation) | Legal review: $30k-$100k |
| Money Transmission | High | $500k-$2M (if required) |
| OFAC Sanctions | Moderate → Low (with geo-blocking) | $10k-$100k/year (screening) |
| Tax Reporting | Moderate | $20k-$50k (analysis) |
| GDPR/Privacy | Low-Moderate | $10k-$25k |
| FTC Consumer | Moderate | Ongoing review |

---

**Not Legal Advice**: Consult licensed attorney in relevant jurisdictions
