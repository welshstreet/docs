# Welsh Street App Compliance Checklist
**App-Specific Compliance Review**  
**Last Updated**: March 8, 2026  
**Status**: Pre-Launch Review

---

## Welsh Street Protocol Overview

**Architecture**:
- Non-custodial AMM (WELSH/STREET pool)
- Stacks blockchain (L2 on Bitcoin)
- Immutable smart contracts
- Frontend: React (Vercel hosted)
- Database: Supabase (tx indexing only)

**Tokens**:
- **WELSH**: Community meme token (launched 2021, 10k+ holders)
- **STREET**: Community participation token
- **CREDIT**: LP token (WELSH/STREET pool ownership)

**Key Features**:
- Zero governance/DAO
- No team allocation
- Burned LP tokens
- Permissionless emissions (CREDIT holders trigger)
- Genesis mint: 21k NFTs distributing 3B STREET

---

## Howey Test Status: ✅ MITIGATED (4.0/10 risk)

### Element 1: Investment of Money - ✅ MITIGATED

**Our Implementation**:
- Genesis mint via street-controller.clar
- 1,000 WELSH donation per NFT (anti-Sybil, spam prevention)
- Donations → street-rewards.clar (community pool, NOT developers)
- No capital raise, no developer proceeds
- Max 2 mints per wallet

**Compliance**:
- ✅ "Without consideration" framing
- ✅ Anti-Sybil purpose documented
- ✅ No sale/purchase language

### Element 2: Common Enterprise - ⚠️ PRESENT (unavoidable)

**Our Implementation**:
- AMM constant-product formula
- Inherent to pooled liquidity model
- Not addressable via structural changes

### Element 3: Expectation of Profit - ⚠️ MODERATE RISK

**Our Implementation**:
- Token disclaimers in place
- No profit promises in contracts
- Risk: User-facing messaging critical

**Compliance Requirements**:
- ✅ STREET = "community participation token"
- ✅ Not equity/ownership/governance
- ✅ Not offered as investment
- ❌ Landing page language needs review (see File Review below)

### Element 4: Efforts of Others - ✅ ELIMINATED

**Our Implementation**:
- emission-controller.clar (permissionless, CREDIT holders trigger)
- All parameters immutable constants
- No admin functions affecting economics
- Developer = ordinary participant post-deployment

**Actual Admin Functions**:
- `set-contract-owner` (street-controller.clar, street-nft.clar) - emergency recovery only
- `set-base-uri` (street-nft.clar) - NFT metadata URI only
- `set-kill-switch` (street-token.clar) - activates 10B supply cap (one-way, defaults off, perpetual emissions active)

**Note**: Kill-switch is voluntary supply constraint (not active by default), cannot be reversed once activated.

**No Functions For**:
- Modifying fees, emission rates, or economic parameters
- Pausing/halting trading or claims
- Changing mint caps or donation amounts
- Adjusting pool ratios or tax rates

---

## Genesis Mint Parameters (Street Controller)

**Contract**: street-controller.clar

| Parameter | Value | Immutable |
|-----------|-------|-----------|
| MINT_CAP | 21,000 NFTs | ✅ |
| MINT_STREET | 100,000 STREET (standard) | ✅ |
| MINT_BONUS | 1,000,000 STREET (milestone, every 21st) | ✅ |
| DONATE_WELSH | 1,000 WELSH | ✅ |
| User limit | 2 mints max | ✅ |

**Terminology**: "Milestone" (NOT "jackpot") - eliminates gambling association

**Legal Position**:
- Not a lottery (no consideration for chance-based prize)
- Deterministic milestone bonus (every 21st mint)
- All mints receive tokens

---

## Emission Parameters (Emission Controller)

**Contract**: emission-controller.clar

| Parameter | Value | Immutable |
|-----------|-------|-----------|
| EMISSION_AMOUNT | 10,000 STREET/block | ✅ |
| BOUNTY | 0.1% (10 BPS) to caller | ✅ |
| Eligibility | 1 BPS of CREDIT supply (0.01%) | ✅ |
| Interval | Per Bitcoin block | ✅ (external) |

**Execution**: Permissionless (any CREDIT holder meeting threshold)

**Legal Position**:
- No developer privileged access
- Algorithmic, predetermined schedule
- Small bounty = operational compensation (gas), not investment return

---

## OFAC Compliance: ✅ INFRASTRUCTURE PROTECTED

**Implementation**:
- Vercel geo-blocking active (automatic via AWS upstream)
- Blocks: Cuba, Iran, NK, Syria, Crimea, Donetsk, Luhansk
- 403 Forbidden for sanctioned regions

**Status**:
- ✅ Terms.mdx updated (sanctions section)
- ✅ Disclaimer.mdx updated (compliance notice)
- [ ] Verify Vercel dashboard setting
- [ ] Optional: Wallet address screening ($10k-$30k)

---

## File-by-File Compliance Review

### Smart Contracts

| File | Status | Issues | Updated |
|------|--------|--------|---------|
| street-controller.clar | ✅ COMPLIANT | None | — |
| emission-controller.clar | ✅ COMPLIANT | None | — |
| street-token.clar | ✅ COMPLIANT | None | — |
| street-nft.clar | ✅ COMPLIANT | None | — |
| credit-token.clar | ✅ COMPLIANT | None | — |
| street-rewards.clar | ✅ COMPLIANT | None | — |
| welshcorgicoin.clar | ✅ COMPLIANT | External token | — |

**Notes**: All economic parameters hardcoded as constants. No admin control over economics.

### Frontend Modals (User-Facing)

| File | Status | Issues | Updated |
|------|--------|--------|---------|
| mint-modal.tsx (devnet) | ✅ COMPLIANT | None | Mar 8, 2026 |
| mint-modal.tsx (testnet) | ✅ COMPLIANT | None | Mar 8, 2026 |

**Changes Made**:
- ✅ Removed "Cost:" → "Anti-Sybil Donation:"
- ✅ Removed investment language
- ✅ Added disclaimer: "Not an investment"
- ✅ "milestone" vs "jackpot"

### Documentation (Technical)

| File | Status | Issues | Updated |
|------|--------|--------|---------|
| docs/core/contracts.mdx | ✅ UPDATED | "milestone" terminology | Mar 8, 2026 |
| docs/core/controllers.mdx | ✅ UPDATED | "milestone" terminology | Mar 8, 2026 |

### Landing Page (User-Facing)

| Section | Status | Issues | Action Required |
|---------|--------|--------|-----------------|
| Hero | 🟡 NEEDS REVIEW | "Powering meme rewards" | Review profit framing |
| About | 🔴 **HIGH RISK** | "Earns STREET rewards", "Economic engine" | Revise yield language |
| Pitch | 🔴 **HIGH RISK** | "Entitled to claim", "Recurring incentive" | Remove profit expectations |
| Exchange | 🔴 **CRITICAL** | "Harvest rewards", "Expand positions" | Eliminate securities terms |
| Tokenomics | 🔴 **CRITICAL** | "Rewards accrue continuously" | Rewrite without yield language |
| LFG | 🟡 NEEDS REVIEW | "Liquidity opportunities" | Neutral language |
| DYOR | ✅ COMPLIANT | Disclaimers present | — |

**Priority**: **CRITICAL** - Must revise before launch

**Forbidden Terms Found**:
- "Harvest" (10/10 risk)
- "Accrue" (10/10 risk)
- "Entitled to" (9/10 risk)
- "Expand positions" (8/10 risk)
- "Economic engine" (7/10 risk)

### Legal Documentation

| File | Status | Issues | Updated |
|------|--------|--------|---------|
| Terms.mdx | ✅ UPDATED | OFAC sanctions added | Mar 2, 2026 |
| Disclaimer.mdx | ✅ UPDATED | Compliance notice added | Mar 2, 2026 |
| Privacy.mdx | ✅ COMPLIANT | GDPR rights added | Mar 2, 2026 |
| Risk.mdx | ✅ COMPLIANT | Loss disclosure present | — |

---

## Launch Blockers

### Critical (Must Complete Before Launch)

1. **Landing Page Rewrite** 🔴
   - Remove all forbidden securities terms
   - Rewrite About, Pitch, Exchange, Tokenomics sections
   - Maintain brand voice WITHOUT profit framing
   - Timeline: 1-2 days

2. **Verify Vercel OFAC Geo-Blocking** 🟡
   - Check dashboard: Project Settings → Firewall
   - Confirm "Block OFAC-Sanctioned Countries" active
   - Screenshot for records
   - Timeline: 15 minutes

### Recommended (Within 30 Days)

3. **Money Transmission Legal Opinion** 🟡
   - Engage FinTech attorney
   - Federal MSB classification analysis
   - State-by-state licensing assessment
   - Cost: $30k-$50k
   - Timeline: 2-4 weeks

4. **IRS Tax Reporting Analysis** 🟡
   - Monitor final broker regulations
   - Obtain tax counsel opinion
   - Cost: $20k-$50k
   - Timeline: 2-4 weeks

---

## Price Display Compliance

**Our Implementation**:
- Database fetches WELSH price from CoinGecko (third-party)
- Calculate STREET price using AMM math
- Display on frontend as informational only

**Compliance**:
- ✅ Contracts don't require price data (pure AMM ratio-based)
- ✅ Third-party source (not developer-controlled)
- ✅ Anyone could build alternate UI
- ✅ Neutral presentation (exchange rates, not performance)

**Avoid**:
- ❌ Price charts showing appreciation
- ❌ Gain/loss indicators
- ❌ "Track portfolio performance"
- ❌ Price predictions

---

## Terminology Standards

### Approved (Use These)

**Genesis Distribution**:
- "Genesis mint"
- "Anti-Sybil donation"
- "Milestone bonus" (every 21st mint)
- "Community participation"
- "Protocol interaction"

**Emissions**:
- "Emission trigger"
- "Call emission function"
- "Operational bounty"
- "Gas compensation"

**Trading**:
- "Swap tokens"
- "Add/remove liquidity"
- "Execute claim function"
- "Protocol mechanics"

### Forbidden (Never Use in User-Facing Content)

- ❌ Earn / earning / earnings
- ❌ Harvest / harvesting
- ❌ Accrue / accruing
- ❌ Entitled to
- ❌ Grow your portfolio
- ❌ Expand your position
- ❌ Generate revenue
- ❌ Investment opportunity
- ❌ Profit from
- ❌ Maximize returns
- ❌ Jackpot / lottery / raffle / gamble

---

## Contract Parameters Summary

**Supply (STREET)**:
- Perpetual supply (no hard cap)
- 10B baseline (optional kill-switch cap, owner-activated)
- 3B genesis mint (21k NFTs)
- Ongoing emissions: 10k STREET/block (permissionless)
- 2B initial LP burn

**Distribution Model**:
- 21,000 NFTs total (1,000 cycles × 21 mints)
- Standard mint: 100k STREET (positions 1-20)
- Milestone mint: 1M STREET (position 21)
- Total distributed: 3B STREET

**Emissions**:
- 10k STREET per Bitcoin block
- 0.1% bounty to caller
- 99.9% to street-rewards.clar
- Eligibility: 1 BPS of CREDIT supply

---

## Action Items by Priority

### Immediate (This Week)

- [ ] Rewrite landing page (remove forbidden terms)
- [ ] Verify Vercel OFAC firewall active
- [ ] Final review of modal disclaimers
- [ ] Confirm all "jackpot" → "milestone" changes

### 30 Days

- [ ] Money transmission legal opinion
- [ ] IRS tax reporting analysis
- [ ] GDPR data breach notification process
- [ ] Optional: OFAC wallet screening decision

### 90 Days

- [ ] State MTL licensing strategy (if required)
- [ ] EU representative (if GDPR threshold met)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Trademark searches (Welsh Street, WELSH, STREET)

---

## Legal Counsel Contacts

**Needed**:
- FinTech/Crypto Regulatory (MSB, OFAC, MTL)
- Securities Law (Howey defense validation)
- Tax Law (IRS broker classification)

**Budget**: $100k-$300k for comprehensive pre-launch review

---

## Notes

- This document focuses on OUR app specifics, not general theory
- See `legal-framework.md` for general DeFi legal requirements
- Update this checklist as files are reviewed/modified
- Track all compliance changes with dates

**Not Legal Advice**: Consult licensed attorney
