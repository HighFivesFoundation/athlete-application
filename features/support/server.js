import { spawn } from "child_process";

let server;

export const startServer = () =>
  new Promise((resolve, reject) => {
    server = spawn("node", ["./api"]);
    server.stdout.on("error", reject);
    server.stdout.on("data", d => resolve(d.toString()));
  });

export const stopServer = () => {
  if (server) {
    server.stdin.pause();
    server.kill();
  }
};
