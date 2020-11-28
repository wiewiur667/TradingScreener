import {ProviderScope, Scope} from "@tsed/di";

@Scope(ProviderScope.SINGLETON)
export class BaseStore {
  constructor(/*@Inject(MONGOOSE_CONNECTIONS) mongoose: mongoose.Connection*/) {
    //$log.debug(mongoose.collections);
  }

  // async checkCollectionExists(collectionName: string): Promise<boolean> {
  //   if (this.mongooseService) {
  //     const collections = await this.mongooseService.db.listCollections({ name: collectionName }, { nameOnly: true }).toArray();
  //     return collections.find((c) => c.name == collectionName) != null;
  //   }

  //   return false;
  // }
}
