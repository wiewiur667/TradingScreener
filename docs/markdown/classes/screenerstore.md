**[Trading Screener by Seb](../README.md)**

> [Globals](../globals.md) / ScreenerStore

# Class: ScreenerStore

Screener store

## Hierarchy

* **ScreenerStore**

## Index

### Constructors

* [constructor](screenerstore.md#constructor)

### Properties

* [screenerModel](screenerstore.md#screenermodel)

### CRUD Methods

* [delete](screenerstore.md#delete)
* [get](screenerstore.md#get)
* [insert](screenerstore.md#insert)
* [update](screenerstore.md#update)

### Instruments Methods

* [addInstruments](screenerstore.md#addinstruments)
* [deleteInstruments](screenerstore.md#deleteinstruments)
* [getInstruments](screenerstore.md#getinstruments)
* [updateInstruments](screenerstore.md#updateinstruments)

## Constructors

### constructor

\+ **new ScreenerStore**(): [ScreenerStore](screenerstore.md)

*Defined in [src/stores/screener.store.ts:13](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L13)*

**Returns:** [ScreenerStore](screenerstore.md)

## Properties

### screenerModel

• `Private` **screenerModel**: ReturnModelType\<*typeof* Screener, unknown>

*Defined in [src/stores/screener.store.ts:13](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L13)*

## CRUD Methods

### delete

▸ **delete**(`name`: string): Promise\<void>

*Defined in [src/stores/screener.store.ts:81](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L81)*

Deletes Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of {Screener} to delete |

**Returns:** Promise\<void>

___

### get

▸ **get**(`name?`: undefined \| string, `single?`: boolean): Promise\<DocumentType\<[Screener](screener.md)> \| DocumentType\<[Screener](screener.md)>[] \| null>

*Defined in [src/stores/screener.store.ts:25](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L25)*

Gets screener(s)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`name?` | undefined \| string | - | Name of Screener |
`single` | boolean | true | If only one item required |

**Returns:** Promise\<DocumentType\<[Screener](screener.md)> \| DocumentType\<[Screener](screener.md)>[] \| null>

___

### insert

▸ **insert**(`screener`: [Screener](screener.md)): Promise\<[Screener](screener.md) \| null>

*Defined in [src/stores/screener.store.ts:43](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L43)*

Insterts Screener

**`throws`** {ScreenerStoreException}

#### Parameters:

Name | Type |
------ | ------ |
`screener` | [Screener](screener.md) |

**Returns:** Promise\<[Screener](screener.md) \| null>

___

### update

▸ **update**(`screener`: [Screener](screener.md)): Promise\<[Screener](screener.md) \| null>

*Defined in [src/stores/screener.store.ts:69](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L69)*

Updates Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`screener` | [Screener](screener.md) | Screener to update, matches on Name |

**Returns:** Promise\<[Screener](screener.md) \| null>

___

## Instruments Methods

### addInstruments

▸ **addInstruments**(`name`: string, `instruments`: string[]): Promise\<[Screener](screener.md) \| null>

*Defined in [src/stores/screener.store.ts:102](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L102)*

Adds Instruments to the Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of Screener |
`instruments` | string[] | List of instrument symbols |

**Returns:** Promise\<[Screener](screener.md) \| null>

___

### deleteInstruments

▸ **deleteInstruments**(`name`: string, `instruments`: string[]): Promise\<[Screener](screener.md) \| null>

*Defined in [src/stores/screener.store.ts:113](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L113)*

Deletes instruments from the Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of Screener |
`instruments` | string[] | List of instrument symbols to delete |

**Returns:** Promise\<[Screener](screener.md) \| null>

___

### getInstruments

▸ **getInstruments**(`name`: string): Promise\<[ScreenInstrument](screeninstrument.md)[] \| null>

*Defined in [src/stores/screener.store.ts:91](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L91)*

Gets Instruments from the Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of Screener |

**Returns:** Promise\<[ScreenInstrument](screeninstrument.md)[] \| null>

___

### updateInstruments

▸ **updateInstruments**(`name`: string, `instruments`: [ScreenInstrument](screeninstrument.md)[]): Promise\<[Screener](screener.md) \| null>

*Defined in [src/stores/screener.store.ts:124](https://github.com/wiewiur667/TradingScreener/blob/0537031/src/stores/screener.store.ts#L124)*

Updates instruments in the Screener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of Screener |
`instruments` | [ScreenInstrument](screeninstrument.md)[] | Instruments to update |

**Returns:** Promise\<[Screener](screener.md) \| null>
