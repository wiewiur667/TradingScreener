**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / IScrapeModel

# Interface: IScrapeModel

## Hierarchy

* **IScrapeModel**

## Implemented by

* [FinVizModel](../classes/finvizmodel.md)

## Index

### Properties

* [ScraperName](iscrapemodel.md#scrapername)
* [ScreenDate](iscrapemodel.md#screendate)
* [Symbol](iscrapemodel.md#symbol)

### Methods

* [parseBoolean](iscrapemodel.md#parseboolean)
* [parseNumber](iscrapemodel.md#parsenumber)
* [parseRange](iscrapemodel.md#parserange)

## Properties

### ScraperName

• `Optional` **ScraperName**: undefined \| string

*Defined in [src/plugins/scrape-model.interface.ts:2](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/scrape-model.interface.ts#L2)*

___

### ScreenDate

• `Optional` **ScreenDate**: [Date](../classes/finvizrating.md#date)

*Defined in [src/plugins/scrape-model.interface.ts:4](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/scrape-model.interface.ts#L4)*

___

### Symbol

• `Optional` **Symbol**: undefined \| string

*Defined in [src/plugins/scrape-model.interface.ts:3](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/scrape-model.interface.ts#L3)*

## Methods

### parseBoolean

▸ **parseBoolean**(`booleanString`: string): boolean

*Defined in [src/plugins/scrape-model.interface.ts:7](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/scrape-model.interface.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`booleanString` | string |

**Returns:** boolean

___

### parseNumber

▸ **parseNumber**(`numberString`: string): number

*Defined in [src/plugins/scrape-model.interface.ts:6](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/scrape-model.interface.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`numberString` | string |

**Returns:** number

___

### parseRange

▸ **parseRange**(`rangeString`: string): Array\<any>

*Defined in [src/plugins/scrape-model.interface.ts:8](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/scrape-model.interface.ts#L8)*

#### Parameters:

Name | Type |
------ | ------ |
`rangeString` | string |

**Returns:** Array\<any>
