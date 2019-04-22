import { Before, After } from "cucumber";
import { startServer, stopServer } from "./server";

if (!process.env.travis) {
  Before(startServer);
  After(stopServer);
}
