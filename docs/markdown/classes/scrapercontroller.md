**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / ScraperController

# Class: ScraperController

## Hierarchy

* **ScraperController**

## Index

### Constructors

* [constructor](scrapercontroller.md#constructor)

### Properties

* [screenerService](scrapercontroller.md#screenerservice)

### Methods

* [scrape](scrapercontroller.md#scrape)

## Constructors

### constructor

\+ **new ScraperController**(`screenerService`: [ScraperService](scraperservice.md)): [ScraperController](scrapercontroller.md)

*Defined in [src/controllers/ScraperController.ts:11](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScraperController.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`screenerService` | [ScraperService](scraperservice.md) |

**Returns:** [ScraperController](scrapercontroller.md)

## Properties

### screenerService

•  **screenerService**: [ScraperService](scraperservice.md)

*Defined in [src/controllers/ScraperController.ts:11](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScraperController.ts#L11)*

## Methods

### scrape

▸ **scrape**(`symbols`: string[]): Promise\<[IScrapeModel](../interfaces/iscrapemodel.md)[]>

*Defined in [src/controllers/ScraperController.ts:19](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScraperController.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`symbols` | string[] |

**Returns:** Promise\<[IScrapeModel](../interfaces/iscrapemodel.md)[]>
