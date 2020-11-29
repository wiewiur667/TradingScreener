import {getModelForClass, ReturnModelType, DocumentType} from "@typegoose/typegoose";
import {ProviderScope, Scope} from "@tsed/di";
import {Screener} from "../models/screeners/screener.model";
import {ScreenInstrument} from "../models/screeners/screen-instrument.model";
import {ScreenerStoreException, ScreenerStoreExceptionType} from "../models/exceptions/ScreenerStoreException";

/**
 * Screener store
 * @category Store
 */
@Scope(ProviderScope.SINGLETON)
export class ScreenerStore {
  private screenerModel: ReturnModelType<typeof Screener, unknown>;

  constructor() {
    this.screenerModel = getModelForClass(Screener);
  }

  /**
   * Gets screener(s)
   * @param name Name of Screener
   * @param single If only one item required
   * @category CRUD
   */
  async get(name?: string, single = true): Promise<DocumentType<Screener> | DocumentType<Screener>[] | null> {
    const query = {} as any;
    if (name) query.Name = {$regex: new RegExp(name, "i")};
    const result = await this.screenerModel.find(query).exec();
    if (!result || (result && result.length == 0)) {
      throw new ScreenerStoreException(ScreenerStoreExceptionType.NotExists, "Not Found");
    }
    if (single) return result[0];

    return result;
  }

  /**
   * Insterts Screener
   * @param screener
   * @throws {ScreenerStoreException}
   * @category CRUD
   */
  async insert(screener: Screener): Promise<Screener | null> {
    // get throws exception when item is not found, we can expect that and silently swallow NotExists type
    try {
      const item = (await this.get(screener.Name)) as Screener;
      if (item)
        throw new ScreenerStoreException(
          ScreenerStoreExceptionType.Exists,
          `Screener with name ${screener.Name} already exists!`
        );
    } catch (ex) {
      if (
        !(ex instanceof ScreenerStoreException) ||
        (ex instanceof ScreenerStoreException && ex.type == ScreenerStoreExceptionType.NotExists)
      )
        throw ex;
    }

    const screenerInstance = new this.screenerModel(screener);
    return (await screenerInstance.save()) ?? null;
  }

  /**
   * Updates Screener
   * @param screener Screener to update, matches on Name
   * @category CRUD
   */
  async update(screener: Screener): Promise<Screener | null> {
    const screenerInstance = (await this.get(screener.Name)) as DocumentType<Screener>;
    await screenerInstance?.update(screener);

    return (await screenerInstance?.save()) ?? null;
  }

  /**
   * Deletes Screener
   * @param name Name of {Screener} to delete
   * @category CRUD
   */
  async delete(name: string): Promise<void> {
    const screenerInstance = (await this.get(name)) as DocumentType<Screener>;
    await screenerInstance?.remove();
  }

  /**
   * Gets Instruments from the Screener
   * @param name Name of Screener
   * @category Instruments
   */
  async getInstruments(name: string): Promise<ScreenInstrument[] | null> {
    const screenerInstance = (await this.get(name)) as DocumentType<Screener>;
    return await screenerInstance.Instruments;
  }

  /**
   * Adds Instruments to the Screener
   * @param name Name of Screener
   * @param instruments List of instrument symbols
   * @category Instruments
   */
  async addInstruments(name: string, instruments: string[]): Promise<Screener | null> {
    const screenerInstance = (await this.get(name)) as DocumentType<Screener>;
    return await screenerInstance.addInstruments(instruments);
  }

  /**
   * Deletes instruments from the Screener
   * @param name Name of Screener
   * @param instruments List of instrument symbols to delete
   * @category Instruments
   */
  async deleteInstruments(name: string, instruments: string[]): Promise<Screener | null> {
    const screenerInstance = (await this.get(name)) as DocumentType<Screener>;
    return await screenerInstance.deleteInstruments(instruments);
  }

  /**
   * Updates instruments in the Screener
   * @param name Name of Screener
   * @param instruments Instruments to update
   * @category Instruments
   */
  async updateInstruments(name: string, instruments: ScreenInstrument[]): Promise<Screener | null> {
    const screenerInstance = (await this.get(name)) as DocumentType<Screener>;
    return await screenerInstance.updateInstruments(instruments);
  }
}
