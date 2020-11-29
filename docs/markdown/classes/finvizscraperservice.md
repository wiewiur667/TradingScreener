**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / FinVizScraperService

# Class: FinVizScraperService

FinViz scraper service

**`export`** 

**`implements`** {IScraperServicePlugin}

## Hierarchy

* **FinVizScraperService**

## Implements

* [IScraperServicePlugin](../interfaces/iscraperserviceplugin.md)

## Index

### Constructors

* [constructor](finvizscraperservice.md#constructor)

### Properties

* [config](finvizscraperservice.md#config)

### Methods

* [getRatings](finvizscraperservice.md#getratings)
* [save](finvizscraperservice.md#save)
* [scrape](finvizscraperservice.md#scrape)

## Constructors

### constructor

\+ **new FinVizScraperService**(`config`: [ConfigurationService](configurationservice.md)): [FinVizScraperService](finvizscraperservice.md)

*Defined in [src/plugins/finviz/service/finviz-scraper.service.ts:21](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/finviz/service/finviz-scraper.service.ts#L21)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [ConfigurationService](configurationservice.md) |

**Returns:** [FinVizScraperService](finvizscraperservice.md)

## Properties

### config

•  **config**: [IScraperConfiguration](../interfaces/iscraperconfiguration.md)

*Defined in [src/plugins/finviz/service/finviz-scraper.service.ts:21](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/finviz/service/finviz-scraper.service.ts#L21)*

## Methods

### getRatings

▸ `Private`**getRatings**(`$`: Root): [FinVizRating](finvizrating.md)[]

*Defined in [src/plugins/finviz/service/finviz-scraper.service.ts:73](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/finviz/service/finviz-scraper.service.ts#L73)*

#### Parameters:

Name | Type |
------ | ------ |
`$` | Root |

**Returns:** [FinVizRating](finvizrating.md)[]

___

### save

▸ **save**(`items`: [FinVizModel](finvizmodel.md)[]): Promise\<number \| undefined>

*Defined in [src/plugins/finviz/service/finviz-scraper.service.ts:26](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/finviz/service/finviz-scraper.service.ts#L26)*

#### Parameters:

Name | Type |
------ | ------ |
`items` | [FinVizModel](finvizmodel.md)[] |

**Returns:** Promise\<number \| undefined>

___

### scrape

▸ **scrape**(`symbol`: string): Promise\<[FinVizModel](finvizmodel.md) \| undefined>

*Implementation of [IScraperServicePlugin](../interfaces/iscraperserviceplugin.md)*

*Defined in [src/plugins/finviz/service/finviz-scraper.service.ts:43](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/plugins/finviz/service/finviz-scraper.service.ts#L43)*

FinViz implementation of scraper
Pushes result to {results}

**`memberof`** FinVizScraperService

#### Parameters:

Name | Type |
------ | ------ |
`symbol` | string |

**Returns:** Promise\<[FinVizModel](finvizmodel.md) \| undefined>

{Promise<void>}
