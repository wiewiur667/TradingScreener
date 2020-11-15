import {DocumentType} from "@typegoose/typegoose";

export interface IScraperModel {
  map(data: Map<string, unknown>): void;
  store<T>(this: DocumentType<T>): void;
}
