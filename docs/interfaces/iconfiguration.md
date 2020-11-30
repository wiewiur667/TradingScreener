**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / IConfiguration

# Interface: IConfiguration

## Hierarchy

* **IConfiguration**

## Index

### Properties

* [general](iconfiguration.md#general)
* [screeners](iconfiguration.md#screeners)

## Properties

### general

•  **general**: { mongo: { databaseUrl: string ; dbName: string ; options: ConnectionOptions  } ; server: { port: number  }  }

*Defined in [src/infrastructure/configuration.interface.ts:6](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/infrastructure/configuration.interface.ts#L6)*

#### Type declaration:

Name | Type |
------ | ------ |
`mongo` | { databaseUrl: string ; dbName: string ; options: ConnectionOptions  } |
`server` | { port: number  } |

___

### screeners

•  **screeners**: [IScraperConfiguration](iscraperconfiguration.md)[]

*Defined in [src/infrastructure/configuration.interface.ts:17](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/infrastructure/configuration.interface.ts#L17)*
