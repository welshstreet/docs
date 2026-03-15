# Welsh Street Swaps

Welsh Street implements a **constant product Automated Market Maker (AMM)** with integrated fee distribution to liquidity providers. The swap functions `swap-a-b` and `swap-b-a` enable bidirectional token swapping between WELSH and STREET using the mathematical formula `x * y = k`, where liquidity is preserved through constant product mechanics.

## Swap Mechanics

The WELSH STREET Exchange implements the **constant product formula**: Constant Product AMM
```
x * y = k
```

Where:
- `x` = WELSH token reserves (`reserve-a`)
- `y` = STREET token reserves (`reserve-b`) 
- `k` = Constant product (maintained across swaps)


## Share Fee

**Purpose**: Shared trading fees distributed to liquidity providers through the distribution contract.

**Destination**: Transferred directly to the `.rewards` contract and distributed to liquidity providers.

The exchange implements a **fee system** where all swap fees are transferred into the rewards contract and then distributed to liquidity providers, with no protocol revenue retained by the exchange itself. Every unit of trading fee flows back to liquidity providers via the rewards mechanism, so the system has no separate income stream and all fee value ultimately accrues to the LPs.
