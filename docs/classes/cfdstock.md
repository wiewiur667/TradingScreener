**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / CFDStock

# Class: CFDStock

Model containing Trading212 Stocks

**`export`** 

## Hierarchy

* [CFD](cfd.md)

  ↳ **CFDStock**

## Implements

* [IInstrumentModel](../interfaces/iinstrumentmodel.md)

## Index

### Properties

* [Company](cfdstock.md#company)
* [Instrument](cfdstock.md#instrument)
* [LongPos](cfdstock.md#longpos)
* [MarginProfessional](cfdstock.md#marginprofessional)
* [MarginRetail](cfdstock.md#marginretail)
* [MarketH](cfdstock.md#marketh)
* [MinTradedQty](cfdstock.md#mintradedqty)
* [ShortPos](cfdstock.md#shortpos)

## Properties

### Company

• `Optional` **Company**: undefined \| string

*Defined in [src/models/stock/instrument-cfd-stock.model.ts:14](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/stock/instrument-cfd-stock.model.ts#L14)*

___

### Instrument

• `Optional` **Instrument**: undefined \| string

*Implementation of [IInstrumentModel](../interfaces/iinstrumentmodel.md).[Instrument](../interfaces/iinstrumentmodel.md#instrument)*

*Inherited from [InstrumentBase](instrumentbase.md).[Instrument](instrumentbase.md#instrument)*

*Defined in [src/models/stock/stock.base.model.ts:6](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/stock/stock.base.model.ts#L6)*

___

### LongPos

• `Optional` **LongPos**: undefined \| number

*Inherited from [CFD](cfd.md).[LongPos](cfd.md#longpos)*

*Defined in [src/models/stock/instrument-cfd.abstract.model.ts:20](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/stock/instrument-cfd.abstract.model.ts#L20)*

___

### MarginProfessional

• `Optional` **MarginProfessional**: undefined \| string

*Inherited from [CFD](cfd.md).[MarginProfessional](cfd.md#marginprofessional)*

*Defined in [src/models/stock/instrument-cfd.abstract.model.ts:17](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/stock/instrument-cfd.abstract.model.ts#L17)*

___

### MarginRetail

• `Optional` **MarginRetail**: undefined \| string

*Inherited from [CFD](cfd.md).[MarginRetail](cfd.md#marginretail)*

*Defined in [src/models/stock/instrument-cfd.abstract.model.ts:14](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/stock/instrument-cfd.abstract.model.ts#L14)*

___

### MarketH

• `Optional` **MarketH**: undefined \| string

*Inherited from [InstrumentBase](instrumentbase.md).[MarketH](instrumentbase.md#marketh)*

*Defined in [src/models/stock/stock.base.model.ts:12](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/stock/stock.base.model.ts#L12)*

___

### MinTradedQty

• `Optional` **MinTradedQty**: undefined \| number

*Implementation of [IInstrumentModel](../interfaces/iinstrumentmodel.md).[MinTradedQty](../interfaces/iinstrumentmodel.md#mintradedqty)*

*Inherited from [InstrumentBase](instrumentbase.md).[MinTradedQty](instrumentbase.md#mintradedqty)*

*Defined in [src/models/stock/stock.base.model.ts:9](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/stock/stock.base.model.ts#L9)*

___

### ShortPos

• `Optional` **ShortPos**: undefined \| number

*Inherited from [CFD](cfd.md).[ShortPos](cfd.md#shortpos)*

*Defined in [src/models/stock/instrument-cfd.abstract.model.ts:23](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/stock/instrument-cfd.abstract.model.ts#L23)*
