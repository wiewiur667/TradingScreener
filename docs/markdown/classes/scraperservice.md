**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / ScraperService

# Class: ScraperService

Wrapper around specific scrapers

**`export`** 

**`implements`** {IScraperService}

## Hierarchy

* **ScraperService**

## Implements

* [IScraperService](../interfaces/iscraperservice.md)

## Index

### Constructors

* [constructor](scraperservice.md#constructor)

### Properties

* [results](scraperservice.md#results)
* [screenerStore](scraperservice.md#screenerstore)
* [services](scraperservice.md#services)

### Methods

* [scrape](scraperservice.md#scrape)

## Constructors

### constructor

\+ **new ScraperService**(`finviz`: [FinVizScraperService](finvizscraperservice.md), `screenerStore`: [ScreenerStore](screenerstore.md)): [ScraperService](scraperservice.md)

*Defined in [src/services/scraper.service.ts:27](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/services/scraper.service.ts#L27)*

#### Parameters:

Name | Type |
------ | ------ |
`finviz` | [FinVizScraperService](finvizscraperservice.md) |
`screenerStore` | [ScreenerStore](screenerstore.md) |

**Returns:** [ScraperService](scraperservice.md)

## Properties

### results

•  **results**: Map\<string, unknown[]> = new Map\<string, unknown[]>()

*Defined in [src/services/scraper.service.ts:25](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/services/scraper.service.ts#L25)*

___

### screenerStore

•  **screenerStore**: [ScreenerStore](screenerstore.md)

*Defined in [src/services/scraper.service.ts:27](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/services/scraper.service.ts#L27)*

___

### services

•  **services**: Array\<{ name: string ; service: [IScraperServicePlugin](../interfaces/iscraperserviceplugin.md)  }> = []

*Defined in [src/services/scraper.service.ts:20](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/services/scraper.service.ts#L20)*

## Methods

### scrape

▸ **scrape**(`scraperPluginName`: string, `symbols`: string[], `save?`: boolean): Promise\<[IScrapeModel](../interfaces/iscrapemodel.md)[]>

*Defined in [src/services/scraper.service.ts:43](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/services/scraper.service.ts#L43)*

Executes given scraper for every symbol in the array

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`scraperPluginName` | string | - |  |
`symbols` | string[] | - |   |
`save` | boolean | true | - |

**Returns:** Promise\<[IScrapeModel](../interfaces/iscrapemodel.md)[]>
