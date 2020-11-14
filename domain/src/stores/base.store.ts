import mongoose from 'mongoose';

export class BaseStore {
  client?: mongoose.Connection;

  dbUrl = '';

  constructor(url: string, dbName: string) {
    this.client = undefined;
    this.dbUrl = `${url}/${dbName}`;
  }

  async connect(): Promise<void> {
    try {
      const db = await mongoose.connect(this.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      this.client = db.connection;
    } catch (error) {
      throw new Error(error);
    }
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }

  async checkCollectionExists(collectionName: string): Promise<boolean> {
    if (this.client) {
      const collections = await this.client.db.listCollections({ name: collectionName }, { nameOnly: true }).toArray();
      return collections.find(c => c.name == collectionName) != null;
    }

    return false;
  }
}
