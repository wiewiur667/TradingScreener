export class ScreenerStoreException extends Error {
  type: ScreenerStoreExceptionType;

  constructor(type: ScreenerStoreExceptionType, message?: string) {
    super(message);
    this.type = type;
  }
}

export enum ScreenerStoreExceptionType {
  Exists,
  NotExists,
  MultipleFound
}
