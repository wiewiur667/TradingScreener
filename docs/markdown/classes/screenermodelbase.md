**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / ScreenerModelBase

# Class: ScreenerModelBase

## Hierarchy

* **ScreenerModelBase**

  ↳ [FinVizModel](finvizmodel.md)

## Implements

* [IScraperModel](../interfaces/iscrapermodel.md)

## Index

### Properties

* [ScreenDate](screenermodelbase.md#screendate)
* [ScreenerName](screenermodelbase.md#screenername)
* [Symbol](screenermodelbase.md#symbol)

### Methods

* [map](screenermodelbase.md#map)
* [store](screenermodelbase.md#store)

## Properties

### ScreenDate

• `Optional` **ScreenDate**: [Date](finvizrating.md#date)

*Defined in [src/models/screeners/screener-model-base.model.ts:12](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/screeners/screener-model-base.model.ts#L12)*

___

### ScreenerName

• `Optional` **ScreenerName**: undefined \| string

*Defined in [src/models/screeners/screener-model-base.model.ts:9](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/screeners/screener-model-base.model.ts#L9)*

___

### Symbol

• `Optional` **Symbol**: undefined \| string

*Defined in [src/models/screeners/screener-model-base.model.ts:15](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/screeners/screener-model-base.model.ts#L15)*

## Methods

### map

▸ `Abstract`**map**(`data`: Map\<string, unknown>): void

*Implementation of [IScraperModel](../interfaces/iscrapermodel.md)*

*Defined in [src/models/screeners/screener-model-base.model.ts:5](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/screeners/screener-model-base.model.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | Map\<string, unknown> |

**Returns:** void

___

### store

▸ `Abstract`**store**\<T>(`this`: DocumentType\<T>): void

*Implementation of [IScraperModel](../interfaces/iscrapermodel.md)*

*Defined in [src/models/screeners/screener-model-base.model.ts:6](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/models/screeners/screener-model-base.model.ts#L6)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`this` | DocumentType\<T> |

**Returns:** void
