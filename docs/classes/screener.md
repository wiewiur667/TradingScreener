**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / Screener

# Class: Screener

## Hierarchy

* **Screener**

## Index

### Properties

* [Description](screener.md#description)
* [Enabled](screener.md#enabled)
* [Instruments](screener.md#instruments)
* [Name](screener.md#name)
* [Url](screener.md#url)

### Methods

* [addInstruments](screener.md#addinstruments)
* [deleteInstruments](screener.md#deleteinstruments)
* [updateInstruments](screener.md#updateinstruments)

## Properties

### Description

• `Optional` **Description**: undefined \| string

*Defined in [src/models/screeners/screener.model.ts:17](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/screeners/screener.model.ts#L17)*

___

### Enabled

• `Optional` **Enabled**: undefined \| false \| true = true

*Defined in [src/models/screeners/screener.model.ts:21](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/screeners/screener.model.ts#L21)*

___

### Instruments

•  **Instruments**: Array\<[ScreenInstrument](screeninstrument.md)> = []

*Defined in [src/models/screeners/screener.model.ts:25](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/screeners/screener.model.ts#L25)*

___

### Name

• `Optional` **Name**: undefined \| string

*Defined in [src/models/screeners/screener.model.ts:9](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/screeners/screener.model.ts#L9)*

___

### Url

• `Optional` **Url**: undefined \| string

*Defined in [src/models/screeners/screener.model.ts:13](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/screeners/screener.model.ts#L13)*

## Methods

### addInstruments

▸ **addInstruments**(`this`: DocumentType\<[Screener](screener.md)>, `instruments`: string[]): Promise\<[Screener](screener.md)>

*Defined in [src/models/screeners/screener.model.ts:27](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/screeners/screener.model.ts#L27)*

#### Parameters:

Name | Type |
------ | ------ |
`this` | DocumentType\<[Screener](screener.md)> |
`instruments` | string[] |

**Returns:** Promise\<[Screener](screener.md)>

___

### deleteInstruments

▸ **deleteInstruments**(`this`: DocumentType\<[Screener](screener.md)>, `instruments`: string[]): Promise\<[Screener](screener.md)>

*Defined in [src/models/screeners/screener.model.ts:44](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/screeners/screener.model.ts#L44)*

#### Parameters:

Name | Type |
------ | ------ |
`this` | DocumentType\<[Screener](screener.md)> |
`instruments` | string[] |

**Returns:** Promise\<[Screener](screener.md)>

___

### updateInstruments

▸ **updateInstruments**(`this`: DocumentType\<[Screener](screener.md)>, `instruments`: [ScreenInstrument](screeninstrument.md)[]): Promise\<[Screener](screener.md)>

*Defined in [src/models/screeners/screener.model.ts:56](https://github.com/wiewiur667/TradingScreener/blob/196ff12/src/models/screeners/screener.model.ts#L56)*

#### Parameters:

Name | Type |
------ | ------ |
`this` | DocumentType\<[Screener](screener.md)> |
`instruments` | [ScreenInstrument](screeninstrument.md)[] |

**Returns:** Promise\<[Screener](screener.md)>
