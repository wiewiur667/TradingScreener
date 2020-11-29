import {Any, CollectionOf, Required, Uri} from "@tsed/schema";
import {prop, DocumentType} from "@typegoose/typegoose";
import {ScreenerStoreException, ScreenerStoreExceptionType} from "../exceptions/ScreenerStoreException";
import {ScreenInstrument} from "./screen-instrument.model";

export class Screener {
  @Required()
  @prop()
  Name?: string;

  @Uri()
  @prop()
  Url?: string;

  @Any(String, null)
  @prop()
  Description?: string;

  @Any(Boolean)
  @prop()
  Enabled?: boolean = true;

  @CollectionOf(ScreenInstrument)
  @prop({type: () => [ScreenInstrument]})
  Instruments: Array<ScreenInstrument> = [];

  public async addInstruments(this: DocumentType<Screener>, instruments: string[]): Promise<Screener> {
    const instrumentsToAdd = instruments.map((i) => new ScreenInstrument(i));
    const instrumentsToAddFiltered = instrumentsToAdd.filter(
      (i) => this.Instruments.find((ii) => ii.Symbol == i.Symbol) == null
    );

    if (instruments.length != instrumentsToAddFiltered.length)
      throw new ScreenerStoreException(
        ScreenerStoreExceptionType.Exists,
        "At least one of items in the list already exist. Use updateInstrument to update existing instruments"
      );

    this.Instruments.push(...instrumentsToAddFiltered);

    return await this.save();
  }

  public async deleteInstruments(this: DocumentType<Screener>, instruments: string[]): Promise<Screener> {
    if (instruments.length == 0)
      throw new ScreenerStoreException(ScreenerStoreExceptionType.Empty, "No instruments to delete.");
    if (this.Instruments.length == 0)
      throw new ScreenerStoreException(ScreenerStoreExceptionType.Empty, "No instruments in array.");

    const instrumentsToDelete = this.Instruments.filter((i) => instruments.indexOf(i.Symbol) == -1);
    this.Instruments = instrumentsToDelete;

    return await this.save();
  }

  public async updateInstruments(this: DocumentType<Screener>, instruments: ScreenInstrument[]): Promise<Screener> {
    if (instruments.length == 0)
      throw new ScreenerStoreException(ScreenerStoreExceptionType.Empty, " No instruments to update");
    if (this.Instruments.length == 0)
      throw new ScreenerStoreException(ScreenerStoreExceptionType.Empty, "No instruments in array.");

    instruments.forEach((i) => {
      const index = this.Instruments.findIndex((ii) => ii.Symbol == i.Symbol);
      if (index > -1) this.Instruments[index] = i;
    });

    return await this.save();
  }
}
