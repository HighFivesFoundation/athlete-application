import { Before, After } from "cucumber";
import { MongoClient } from "mongodb";
import { startServer, stopServer } from "./server";

let mongoClient;

if (!process.env.travis) {
  Before(async function() {
    mongoClient = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true
    });
    this.db = mongoClient.db();
    await startServer();
  });
  After(() => {
    stopServer();
    mongoClient.close();
  });
}
