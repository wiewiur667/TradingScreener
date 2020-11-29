**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / InstrumentStore

# Class: InstrumentStore

## Hierarchy

* **InstrumentStore**

## Index

### Properties

* [baseStore](instrumentstore.md#basestore)

### Methods

* [getAllInstruments](instrumentstore.md#getallinstruments)

### Object literals

* [trading212Instruments](instrumentstore.md#trading212instruments)

## Properties

### baseStore

• `Private` `Optional` **baseStore**: [BaseStore](basestore.md)

*Defined in [src/stores/instrument.store.ts:14](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/instrument.store.ts#L14)*

## Methods

### getAllInstruments

▸ **getAllInstruments**(`unique?`: boolean): Promise\<string[] \| null>

*Defined in [src/stores/instrument.store.ts:26](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/instrument.store.ts#L26)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`unique` | boolean | true |

**Returns:** Promise\<string[] \| null>

## Object literals

### trading212Instruments

▪ `Private` **trading212Instruments**: object

*Defined in [src/stores/instrument.store.ts:16](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/instrument.store.ts#L16)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`equity` | ReturnModelType\<[Equity](equity.md), {}> | getModelForClass(Equity) |
`cfd` | object | { commodity: ReturnModelType\<[CFDCommodity](cfdcommodity.md), {}> = getModelForClass(CFDCommodity); forex: ReturnModelType\<[CFDForex](cfdforex.md), {}> = getModelForClass(CFDForex); index: ReturnModelType\<[CFDIndex](cfdindex.md), {}> = getModelForClass(CFDIndex); stock: ReturnModelType\<[CFDStock](cfdstock.md), {}> = getModelForClass(CFDStock) } |
