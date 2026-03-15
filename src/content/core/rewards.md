### Welsh Street vs Traditional DeFi AMMs

Brief overview. The Welsh Street zero debt cumulative approach has several advantages, especially in a blockchain context.

### Traditional DeFi AMMs

The traditional DeFi AMM structure discourages optimal behavior. Traditional AMM reward systems generally require users to withdraw liquidity in order to claim distributions. LP tokens must be burned, positions are interrupted, and the usual withdraw → claim → re‑deposit flow adds gas cost and timing risk. Users claim infrequently because costs and friction are high. 

In many designs, accessing distributions and locking in any existing impermanent loss are effectively the same action. Impermanent loss is realized at the moment of liquidity removal instead of remaining a floating, potentially reversible condition.

To work around these issues, some protocols add complex reward schemes such as staking and time‑locks. These rely on time‑based calculations that are expensive on‑chain, layer in variables and lock rules that are hard to reason about, and expand the implementation surface. The net effect is higher gas, more parameters to track, and additional complexity that increases security risks.

### Welsh Street Rewards

The Welsh Street design is built to support optimal user behavior rather than fight against it. Rewards can be claimed without withdrawing liquidity, so participants do not have to remove liquidity positions just to claim distributions in the system.

Because claims are separate from withdrawals, participants can harvest distributions frequently at low gas cost while keeping liquidity active and maintaining market exposure. Impermanent loss can remain unrealized until conditions are favorable, instead of being forced at the moment of claim. There are also no lock-ups or staking contracts so users can claim anytime they have claimable rewards.

Under the hood, the rewards system is engineered for efficiency and clarity. The single global index per token keeps gas usage low, join‑time snapshots keep distributions proportional to each participant’s contribution period, and new participants start with zero debt instead of a legacy backlog which historically is prone to attack. The cumulative index structure is deliberately simple so accounting remains transparent, auditable, and 100% onchain.

### Summary

| Aspect                 | Welsh Street                                  | Traditional DeFi AMMs                          |
|------------------------|-----------------------------------------------|------------------------------------------------|
| Gas Costs              | Low (high-precision math)                     | High (time-based calculations)                 |
| Gas Efficiency         | Single claim transaction                      | Three or more transactions per full workflow   |
| User Experience        | Clear, immediate participation                | Penalties and locks hard to predict            |
| Claim Without Withdrawal | Keep LP position active                     | Must burn LP tokens to claim                   |
| Market Exposure        | No position interruption during claims        | Lose exposure while claims are processed       |
| Impermanent Loss Handling | Keep IL unrealized until withdrawal        | Forced IL realization to access rewards        |
| Compounding Workflow   | Easy, frequent claims                         | Expensive and cumbersome to compound           |
| Security               | Cumulative math is straightforward and provable | Extra complexity increases risk              |
| Maintenance            | Simple, index-based accounting                | Complex edge cases and evolving rules          |
| Time Lockups           | None required by design                       | Commonly rely on lock mechanics                |
| Time-Weighted Rewards  | Participation-period aware                    | Frequently exploitable                         |