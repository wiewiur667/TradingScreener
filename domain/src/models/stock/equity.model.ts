import { modelOptions, prop } from '@typegoose/typegoose';
import { InstrumentBase } from './stock.base.model';

/**
 * Model containing Trading212 Equities
 *
 * @export
 * @class Equity
 * @extends {InstrumentBase}
 */
@modelOptions({schemaOptions: {collection: "instruments.trading212.equity"}})
export class Equity extends InstrumentBase {
  
  @prop()
  Company?: string;

  @prop()
  CurrencyCode?: string;
  
  @prop()
  ISIN?: string;

  @prop()
  MarketName?: string;
}