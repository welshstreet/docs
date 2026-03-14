import { Callout } from 'nextra/components'

# Distribution System

### Welsh Street vs Traditional DeFi AMMs

The Welsh Street zero debt cumulative approach has several advantages, especially in a blockchain context.

✅ **Welsh Street Rewards Design:**
- Gas Efficient: High-precision math with minimal computational overhead
- Fair: Join-time snapshots ensure proportional distribution
- Immediate Participation: New users start with zero debt and accrue distributions from entry
- Maintainable: Cumulative indexes are mathematically straightforward and provable

❌ **Traditional DeFi AMM Reward Designs (e.g., dynamic time-lock systems):**
- High Gas Costs: Time-based calculations are expensive on-chain
- User Friction: Variable penalties and lock rules are hard to reason about
- Implementation Risk: More complex logic expands the attack surface

| Aspect          | Welsh Street                          | Traditional DeFi AMMs                 |
|-----------------|---------------------------------------|---------------------------------------|
| Gas Costs       | ✅ Minimal (high-precision math)      | ❌ High (time-based calculations)     |
| User Experience | ✅ Clear, immediate participation     | ❌ Penalties/locks hard to predict    |
| Security        | ✅ Cumulative math = provable         | ❌ Extra complexity = more risk       |
| Whale Protection| ✅ Automatic via join-time snapshots  | ❌ Often bolted-on, rule-based        |
| Maintenance     | ✅ Simple, index-based accounting     | ❌ Complex edge cases                 |
| Time Lockups    | ✅ None required by design            | ❌ Commonly rely on lock mechanics    |

## How WELSH STREET Compares to Other AMMs

### Traditional AMMs
❌ Traditional AMM Reward Systems have Major Limitations:
1. Must Withdraw to Claim: Users must burn LP tokens to access rewards
2. Lose Market Exposure: Can't maintain liquidity position while claiming
3. High Gas Costs: Multiple transactions needed (withdraw → claim → re-deposit)
4. Timing Risk: Market can move against you during withdrawal period
5. Compound Friction: Extra steps discourage frequent reward claiming
6. FORCED IMPERMANENT LOSS REALIZATION: Must crystallize IL to claim rewards

### WELSH STREET's Zero Debt Cumulative Approach

✅ Technical Characteristics:
- **Zero Debt System**: New users start receiving distributions immediately with no barriers
- **Join-time Protection**: Snapshots prevent retroactive reward claims
- **Accounting Integrity**: Complete tracking of distributed vs. claimed tokens
- **High Precision**: 9-decimal precision prevents calculation errors
- **Cleanup System**: Automatic recovery of untracked tokens and dust

✅ User-Facing Characteristics:

| Feature                    | WELSH STREET                  | Traditional AMMs              |
|---------------------------|-------------------------------|-------------------------------|
| Claim Without Withdrawal  | ✅ Keep LP position active    | ❌ Must burn LP tokens        |
| Impermanent Loss Handling | ✅ Keep IL unrealized         | ❌ Force IL realization       |
| Market Exposure           | ✅ No position interruption   | ❌ Lose exposure during claim |
| Gas Efficiency            | ✅ Single claim transaction   | ❌ 3+ transactions needed     |
| Compounding Workflow      | ✅ Easy frequent claims       | ❌ Expensive to compound      |
| Whale Protection          | ✅ Snapshot-based             | ❌ Often vulnerable to gaming |
| Time-Weighted Rewards     | ✅ Participation-period aware | ❌ Frequently exploitable     |




## Distribution Sources

WELSH STREET distributions accumulate from three primary sources:

### Trading Fee Allocation
- WELSH Token Swaps: A percentage of swap fees from WELSH → STREET trades
- STREET Token Swaps: A percentage of swap fees from STREET → WELSH trades
- Real-time accumulation: Fees are distributed immediately to the distribution pool

### Street Token Emissions
- Direct STREET Emissions: STREET tokens allocated directly to the distribution pool
- Liquidity Allocations: Token emissions to bootstrap and maintain liquidity
- Protocol Operations: Long-term sustainability through emission schedules

### Contributions & Enhanced Features
- **Contribution System**: `donate-rewards` unlimited contribution capability with automatic tracking
- **Emission Processing**: `update-emission-rewards` with epoch-based protection
- **Cleanup System**: Automatic detection and redistribution of untracked tokens
- **Perfect Accounting**: Complete tracking of distributed vs. claimed tokens
- **Dust Recovery**: Intelligent cleanup of small amounts to prevent token lock






### Rewards Workflow Comparison

**Traditional AMM Workflow:**
```
User wants rewards → Withdraw LP → REALIZE IMPERMANENT LOSS → Lose market exposure
→ Claim rewards → Pay gas fees → Re-deposit → Pay gas again → Resume earning
```

**WELSH STREET Workflow:**
```
User wants rewards → Claim rewards → KEEP IL UNREALIZED → Keep earning → Done!
```

The Benefits of the WELSH STREET system are tremendous:
- Gas Savings: 60-80% reduction in transaction costs
- IL Protection: Keep losses unrealized and potentially recoverable
- Position Continuity: Never interrupt your market-making strategy
- Optimal Timing: Claim rewards frequently, withdraw only when profitable

### Gas Optimization Benefits

Traditional AMM Reward Claiming:
```
Transaction 1: approve() - Enable withdrawal
Transaction 2: withdrawLiquidityWithRewards() - Burn LP tokens
Transaction 3: approve() - Enable re-deposit
Transaction 4: addLiquidity() - Mint new LP tokens
```
Total: 4 Transactions = lot's of  gas

WELSH STREET Reward Claiming:
```
Transaction 1: claim-rewards() - Get rewards, keep LP position
```
Total: 1 Transaction = minimal gas

Gas Savings: 80% reduction in gas costs 🔥

### User Experience Advantages

1. No Market Timing Risk: Keep earning fees during reward claiming
2. Impermanent Loss Protection: Keep IL unrealized and potentially recoverable
3. Continuous Compounding: Claim frequently without position interruption
4. Simplified Mental Model: LP position and rewards are separate concepts
5. Portfolio Management: Maintain desired liquidity ratios while harvesting rewards
6. MEV Protection: No vulnerable withdraw-redeposit window
7. Strategic Flexibility: Choose optimal timing for both reward claims and position exits

### Economic Efficiency

WELSH STREET enables optimal user behavior:
- ✅ Frequent reward harvesting (low gas cost)
- ✅ Continuous market making (always earning fees)
- ✅ Optimal position sizing (no withdrawal constraints)
- ✅ Risk management (maintain exposure while claiming)
- ✅ IL mitigation (keep losses unrealized until favorable conditions)

Traditional AMMs discourage optimal behavior:
- ❌ Infrequent claiming (high gas costs)
- ❌ Position interruption (miss fee opportunities)
- ❌ Timing constraints (vulnerable to market moves)
- ❌ All-or-nothing (can't claim partial rewards)
- ❌ Forced IL realization (crystallize losses to get rewards)

## Reality Check: Direct Contract Interaction vs. Frontend

The WELSH STREET rewards system was kept simple for the reasons mentioned above (gas efficiency, scalability, reduce attack surface, etc.), but this doesn't mean there are not trade-offs.  The user's block position is reset every time they perform a liquidity operation (provide/remove/lock/burn).  This enhances security and prevents manipulation of the rewards system.  However, this means if the user changes their LP position in any way before claiming rewards, those rewards are lost forever. The rewards contract will rebalance and the unclaimed rewards are redistributed to the other liquidity providers.

```clarity
(try! (contract-call? .rewards update-user-rewards tx-sender)) ;; Resets user's reward baseline.
```

To offer the best UX possible and prevent user's from losing their claim to rewards, on the frontend the WELSH STREET Exchange has implemented safety checks so users cannot change their liquidity position using the frontend without claiming rewards.  However, interacting with the contracts directly, for example using the Stacks explorer or CLI, these protections do not exist.

<Callout type="warning">Claim Rewards before modifying your liquidity position to avoid losing rewards.</Callout>

This isn't manipulation or off-chain shenanigans affecting on-chain behavior! The WELSH STREET frontend simply checks the user's balance and changes the state of the liquidity function buttons to notify user's that they have rewards.