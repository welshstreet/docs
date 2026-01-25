# Emission Schedule & Inflation Model

## Introduction

This protocol implements a **step-down inflation model** addressing key DeFi challenges: liquidity bootstrapping, participant retention, and sustainable growth. Each emission event is triggered by a Bitcoin block, creating approximately 52,560 annual epochs based on Bitcoin's 10-minute average block time.

Rewards are distributed as a percentage of total supply to liquidity providers, establishing a predictable framework with predetermined inflation rates that decline systematically before converging on a sustainable 2.1% long-term rate.



## Early Bootstrapping Strategy

Elevated initial inflation rates (21% year one, 16% year two) address the "liquidity cold start problem" facing new DeFi protocols. Empty pools with high slippage create circular dependency: users avoid poor trading conditions while liquidity providers avoid low-volume pools.

The 21% first-year yield compensates early participants for maximum protocol risk, including smart contract vulnerabilities and regulatory uncertainty. This creates favorable risk-adjusted returns for sophisticated early adopters while generating network effects that accelerate growth through a positive feedback loop: more liquidity reduces slippage, attracts traders, generates fees, and incentivizes additional liquidity provision.

## Predictable Decline Benefits

The systematic step-down schedule eliminates uncertainty and enables accurate multi-year financial modeling. This pre-announced approach allows sophisticated investors to calculate expected dilution while protecting holders from arbitrary governance changes, building institutional confidence.

Predictable decline deters mercenary capital as yield farmers are filtered out when rates decline. This rewards long-term commitment over speculation, creating stickier liquidity from participants focused on protocol fundamentals rather than opportunistic yields. Early adopters receive higher dilution compensation for higher risk, while later participants face lower dilution with reduced protocol risk.

## 2.1% Long-Term Inflation Foundation

The permanent 2.1% inflation rate draws from central banking best practices, with the Federal Reserve, ECB, and Bank of England all targeting ~2% as optimal for economic stability. This "Goldilocks rate" balances spending incentives with purchasing power preservation.

The protocol's 2.1% represents a slight premium above traditional targets, accounting for crypto market volatility while ensuring continuous liquidity provider incentives. This rate provides sustainable treasury growth for development while remaining low enough that protocol growth typically exceeds token dilution. The approach avoids deflationary death spirals while encouraging active participation, supported by historical precedent from Bitcoin's successful bootstrapping model.

