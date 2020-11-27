/*import { registerProvider } from "@tsed/di";
import { mongoose } from "@typegoose/typegoose";
import { ConfigurationService } from "../configuration";

export const MONGOOSE_CONNECTIONS = Symbol.for("MONGOOSE_CONNECTIONS");

registerProvider({
  provide: MONGOOSE_CONNECTIONS,
  deps: [ConfigurationService],
  useAsyncFactory: async (configuration: ConfigurationService) => {
    const options = configuration.configuration.general.mongo;
    const connection = (await mongoose.connect(options.databaseUrl, options.options)).connection;

    return connection;
  }
});
*/
