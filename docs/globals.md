**[Trading Screener by Seb](README.md)**

> Globals

# Trading Screener by Seb

## Index

### Enumerations

* [ScreenerStoreExceptionType](enums/screenerstoreexceptiontype.md)

### Controller Classes

* [ScraperController](classes/scrapercontroller.md)
* [ScreenerController](classes/screenercontroller.md)

### Other Classes

* [CFD](classes/cfd.md)
* [CFDCommodity](classes/cfdcommodity.md)
* [CFDForex](classes/cfdforex.md)
* [CFDIndex](classes/cfdindex.md)
* [CFDStock](classes/cfdstock.md)
* [ConfigurationService](classes/configurationservice.md)
* [Equity](classes/equity.md)
* [FinVizModel](classes/finvizmodel.md)
* [FinVizRating](classes/finvizrating.md)
* [FinVizScraperService](classes/finvizscraperservice.md)
* [InstrumentBase](classes/instrumentbase.md)
* [ScraperService](classes/scraperservice.md)
* [ScreenInstrument](classes/screeninstrument.md)
* [ScreenList](classes/screenlist.md)
* [Screener](classes/screener.md)
* [ScreenerModelBase](classes/screenermodelbase.md)
* [ScreenerStoreException](classes/screenerstoreexception.md)
* [Server](classes/server.md)

### Store Classes

* [BaseStore](classes/basestore.md)
* [InstrumentStore](classes/instrumentstore.md)
* [ScraperStore](classes/scraperstore.md)
* [ScreenerStore](classes/screenerstore.md)
* [StockStoreService](classes/stockstoreservice.md)

### Interfaces

* [IConfiguration](interfaces/iconfiguration.md)
* [IInstrumentModel](interfaces/iinstrumentmodel.md)
* [IScrapeModel](interfaces/iscrapemodel.md)
* [IScraperConfiguration](interfaces/iscraperconfiguration.md)
* [IScraperModel](interfaces/iscrapermodel.md)
* [IScraperService](interfaces/iscraperservice.md)
* [IScraperServicePlugin](interfaces/iscraperserviceplugin.md)
* [IScreenerModel](interfaces/iscreenermodel.md)

### Variables

* [rootDir](globals.md#rootdir)

### Functions

* [bootstrap](globals.md#bootstrap)
* [mapBool](globals.md#mapbool)
* [mapNumber](globals.md#mapnumber)
* [mapRange](globals.md#maprange)
* [mapString](globals.md#mapstring)

## Variables

### rootDir

• `Const` **rootDir**: string = \_\_dirname

*Defined in [src/Server.ts:13](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/Server.ts#L13)*

## Functions

### bootstrap

▸ **bootstrap**(): Promise\<void>

*Defined in [src/index.ts:5](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/index.ts#L5)*

**Returns:** Promise\<void>

___

### mapBool

▸ **mapBool**(`fieldName`: string): PropertyDecorator

*Defined in [src/plugins/finviz/model/finviz.decorators.ts:31](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.decorators.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`fieldName` | string |

**Returns:** PropertyDecorator

___

### mapNumber

▸ **mapNumber**(`fieldName`: string): PropertyDecorator

*Defined in [src/plugins/finviz/model/finviz.decorators.ts:13](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.decorators.ts#L13)*

#### Parameters:

Name | Type |
------ | ------ |
`fieldName` | string |

**Returns:** PropertyDecorator

___

### mapRange

▸ **mapRange**(`fieldName`: string, `order`: number): PropertyDecorator

*Defined in [src/plugins/finviz/model/finviz.decorators.ts:22](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.decorators.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`fieldName` | string |
`order` | number |

**Returns:** PropertyDecorator

___

### mapString

▸ **mapString**(`fieldName`: string): PropertyDecorator

*Defined in [src/plugins/finviz/model/finviz.decorators.ts:4](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/plugins/finviz/model/finviz.decorators.ts#L4)*

#### Parameters:

Name | Type |
------ | ------ |
`fieldName` | string |

**Returns:** PropertyDecorator
