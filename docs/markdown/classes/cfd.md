**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / CFD

# Class: CFD

Abstract

**`export`** 

**`abstract`** 

## Hierarchy

* [InstrumentBase](instrumentbase.md)

  ↳ **CFD**

  ↳↳ [CFDCommodity](cfdcommodity.md)

  ↳↳ [CFDForex](cfdforex.md)

  ↳↳ [CFDIndex](cfdindex.md)

  ↳↳ [CFDStock](cfdstock.md)

## Implements

* [IInstrumentModel](../interfaces/iinstrumentmodel.md)

## Index

### Properties

* [Instrument](cfd.md#instrument)
* [LongPos](cfd.md#longpos)
* [MarginProfessional](cfd.md#marginprofessional)
* [MarginRetail](cfd.md#marginretail)
* [MarketH](cfd.md#marketh)
* [MinTradedQty](cfd.md#mintradedqty)
* [ShortPos](cfd.md#shortpos)

## Properties

### Instrument

• `Optional` **Instrument**: undefined \| string

*Implementation of [IInstrumentModel](../interfaces/iinstrumentmodel.md).[Instrument](../interfaces/iinstrumentmodel.md#instrument)*

*Inherited from [InstrumentBase](instrumentbase.md).[Instrument](instrumentbase.md#instrument)*

*Defined in [src/models/stock/stock.base.model.ts:6](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/stock/stock.base.model.ts#L6)*

___

### LongPos

• `Optional` **LongPos**: undefined \| number

*Defined in [src/models/stock/instrument-cfd.abstract.model.ts:20](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/stock/instrument-cfd.abstract.model.ts#L20)*

___

### MarginProfessional

• `Optional` **MarginProfessional**: undefined \| string

*Defined in [src/models/stock/instrument-cfd.abstract.model.ts:17](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/stock/instrument-cfd.abstract.model.ts#L17)*

___

### MarginRetail

• `Optional` **MarginRetail**: undefined \| string

*Defined in [src/models/stock/instrument-cfd.abstract.model.ts:14](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/stock/instrument-cfd.abstract.model.ts#L14)*

___

### MarketH

• `Optional` **MarketH**: undefined \| string

*Inherited from [InstrumentBase](instrumentbase.md).[MarketH](instrumentbase.md#marketh)*

*Defined in [src/models/stock/stock.base.model.ts:12](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/stock/stock.base.model.ts#L12)*

___

### MinTradedQty

• `Optional` **MinTradedQty**: undefined \| number

*Implementation of [IInstrumentModel](../interfaces/iinstrumentmodel.md).[MinTradedQty](../interfaces/iinstrumentmodel.md#mintradedqty)*

*Inherited from [InstrumentBase](instrumentbase.md).[MinTradedQty](instrumentbase.md#mintradedqty)*

*Defined in [src/models/stock/stock.base.model.ts:9](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/stock/stock.base.model.ts#L9)*

___

### ShortPos

• `Optional` **ShortPos**: undefined \| number

*Defined in [src/models/stock/instrument-cfd.abstract.model.ts:23](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/stock/instrument-cfd.abstract.model.ts#L23)*
