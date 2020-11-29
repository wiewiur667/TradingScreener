import {DocumentType, prop} from "@typegoose/typegoose";
import {IScraperModel} from "./scraper-model.interface";

export abstract class ScreenerModelBase implements IScraperModel {
  abstract map(data: Map<string, unknown>): void;
  abstract store<T>(this: DocumentType<T>): void;

  @prop()
  ScreenerName?: string;

  @prop()
  ScreenDate?: Date;

  @prop()
  Symbol?: string;
}
