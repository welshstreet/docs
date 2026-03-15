### Example 

The example is a scenario when a very large trade occurs right before a user makes a trade in the same direction. Assume a whale wants to buy a large amount of token B. The whale’s trade pushes the price of token B up by making it scarcer in the pool. If the whale trade executes before the user can analyze the new price, the user would receive fewer B for the same 1,000 unless post conditions stop the trade.

Fees are not including in the examples for simplicity.

> The user swaps 1,000 A → 1,000 B with a 1% slippage setting. A whale submits a huge A → B swap before the user’s tx confirms.

From this quote and slippage, the frontend computes the slippage bounds. 

- Send exactly 1,000 A from the user principal.
- The AMM contract must send between 990 B and 1,010 B to the user. In other words the expected output must be 1,000 B with the upper and lower bounds:

- Upper bound:
  - `maxBOut = floor(1,000 × (1 + 0.01)) = floor(1,010) = 1,010 B`

- Lower bound:
  - `minBOut = floor(1,000 × (1 − 0.01)) = floor(990) = 990 B`

Two possible outcomes at commit time:

1. Whale confirms first → price moves down sharply.
   Re-evaluating the user’s tx against the new pool state now yields 960 B out for the 1,000 A input.
   - `960 B < minBOut (990 B)` → the lower bound fails.
   - The transaction reverts; the user keeps 1,000 A and pays no fee.

2. Whale confirms after the user.
   The current state at execution still supports 995 B out for 1,000 A in.
   - `995 B` lies between `minBOut (990)` and `maxBOut (1,010)`.
   - All post-conditions pass → the transaction executes and the user receives 995 B for 1,000 A.

<Callout type="info">Post-conditions and Slippage help protect users and liquidity providers from unexpected or undesirable results</Callout>
