import { Before, After } from "cucumber";
import { MongoClient } from "mongodb";
import { startServer, stopServer } from "./server";

let mongoClient;

if (!process.env.travis) {
  Before(async function() {
    console.log("connection to mongo");
    mongoClient = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true
    });
    console.log("mongo connected");
    console.log("setting db");
    this.db = mongoClient.db();
    console.log("db connected");
    console.log("starting server");
    await startServer();
    console.log("server started");
  });
  After(() => {
    stopServer();
    mongoClient.close();
  });
}
