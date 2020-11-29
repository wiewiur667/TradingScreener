**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / ScreenerController

# Class: ScreenerController

## Hierarchy

* **ScreenerController**

## Index

### Constructors

* [constructor](screenercontroller.md#constructor)

### Properties

* [screenerStore](screenercontroller.md#screenerstore)

### CRUD Methods

* [delete](screenercontroller.md#delete)
* [get](screenercontroller.md#get)
* [post](screenercontroller.md#post)
* [put](screenercontroller.md#put)

### Instruments Methods

* [addInstruments](screenercontroller.md#addinstruments)
* [deleteInstruments](screenercontroller.md#deleteinstruments)
* [getInstruments](screenercontroller.md#getinstruments)
* [updateInstruments](screenercontroller.md#updateinstruments)

## Constructors

### constructor

\+ **new ScreenerController**(`screenerStore`: [ScreenerStore](screenerstore.md)): [ScreenerController](screenercontroller.md)

*Defined in [src/controllers/ScreenerController.ts:14](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`screenerStore` | [ScreenerStore](screenerstore.md) |

**Returns:** [ScreenerController](screenercontroller.md)

## Properties

### screenerStore

•  **screenerStore**: [ScreenerStore](screenerstore.md)

*Defined in [src/controllers/ScreenerController.ts:14](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L14)*

## CRUD Methods

### delete

▸ **delete**(`name`: string): Promise\<any>

*Defined in [src/controllers/ScreenerController.ts:73](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L73)*

Deletes Screener using param

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** Promise\<any>

___

### get

▸ **get**(`name?`: undefined \| string): Promise\<[Screener](screener.md)[]>

*Defined in [src/controllers/ScreenerController.ts:25](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L25)*

Gets instruments

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined \| string | (Optional) |

**Returns:** Promise\<[Screener](screener.md)[]>

___

### post

▸ **post**(`item`: [Screener](screener.md)): Promise\<any>

*Defined in [src/controllers/ScreenerController.ts:37](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L37)*

Inserts new Screener

#### Parameters:

Name | Type |
------ | ------ |
`item` | [Screener](screener.md) |

**Returns:** Promise\<any>

___

### put

▸ **put**(`screener`: [Screener](screener.md)): Promise\<any>

*Defined in [src/controllers/ScreenerController.ts:54](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L54)*

Updates Screener using param

#### Parameters:

Name | Type |
------ | ------ |
`screener` | [Screener](screener.md) |

**Returns:** Promise\<any>

___

## Instruments Methods

### addInstruments

▸ **addInstruments**(`name`: string, `instruments`: Array\<string>): Promise\<any \| undefined>

*Defined in [src/controllers/ScreenerController.ts:114](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L114)*

Adds instruments to selected Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Screener name |
`instruments` | Array\<string> | Instruments to add |

**Returns:** Promise\<any \| undefined>

___

### deleteInstruments

▸ **deleteInstruments**(`name`: string, `instruments`: Array\<string>): Promise\<any \| undefined>

*Defined in [src/controllers/ScreenerController.ts:139](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L139)*

Delete instruments to selected Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Screener name |
`instruments` | Array\<string> | Instruments to add |

**Returns:** Promise\<any \| undefined>

___

### getInstruments

▸ **getInstruments**(`name`: string): Promise\<any \| undefined>

*Defined in [src/controllers/ScreenerController.ts:92](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L92)*

Gets instruments from selected Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Screener name |

**Returns:** Promise\<any \| undefined>

___

### updateInstruments

▸ **updateInstruments**(`name`: string, `instruments`: Array\<[ScreenInstrument](screeninstrument.md)>): Promise\<any \| undefined>

*Defined in [src/controllers/ScreenerController.ts:165](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/controllers/ScreenerController.ts#L165)*

Update instruments to selected Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Screener name |
`instruments` | Array\<[ScreenInstrument](screeninstrument.md)> | Instruments to add |

**Returns:** Promise\<any \| undefined>
