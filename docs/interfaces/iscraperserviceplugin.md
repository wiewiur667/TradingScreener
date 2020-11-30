**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / IScraperServicePlugin

# Interface: IScraperServicePlugin

## Hierarchy

* **IScraperServicePlugin**

## Implemented by

* [FinVizScraperService](../classes/finvizscraperservice.md)

## Index

### Methods

* [save](iscraperserviceplugin.md#save)
* [scrape](iscraperserviceplugin.md#scrape)

## Methods

### save

▸ **save**(`results`: [IScrapeModel](iscrapemodel.md)[]): Promise\<number \| undefined>

*Defined in [src/plugins/scraper-service-plugin.interface.ts:5](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/scraper-service-plugin.interface.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`results` | [IScrapeModel](iscrapemodel.md)[] |

**Returns:** Promise\<number \| undefined>

___

### scrape

▸ **scrape**(`symbol`: string): Promise\<[IScrapeModel](iscrapemodel.md) \| undefined>

*Defined in [src/plugins/scraper-service-plugin.interface.ts:4](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/scraper-service-plugin.interface.ts#L4)*

#### Parameters:

Name | Type |
------ | ------ |
`symbol` | string |

**Returns:** Promise\<[IScrapeModel](iscrapemodel.md) \| undefined>
