import { Configuration, Inject } from "@tsed/di";
import { PlatformApplication } from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/mongoose";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as methodOverride from "method-override";
import * as cors from "cors";
import * as helmet from "helmet";
import "@tsed/ajv";
import "@tsed/swagger";

export const rootDir = __dirname;

@Configuration({
  rootDir,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  mongoose: {
    url: "mongodb://mongo:27017/trading",
    connectionOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  mount: {
    "/rest": [`${rootDir}/controllers/**/*.ts`]
  },
  swagger: [
    {
      path: "/docs"
    }
  ],
  exclude: ["**/*.spec.ts"]
})
export class Server {
  @Inject()
  app!: PlatformApplication;

  @Configuration()
  settings!: Configuration;

  $beforeInit(): void {
    // Fix fom mongoose creating empty connection
    const m = require("mongoose");
    m.connections = m.connections.filter((c: any) => c._connectionString != null);
  }

  $beforeRoutesInit(): void {
    this.app
      //.use(helmet())
      //.use(cors())
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true
        })
      );
  }
}
