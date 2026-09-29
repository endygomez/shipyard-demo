import express from "express";
import path from "path";
import os from "os";

const app = express();
const port = Number(process.env.PORT ?? 3000);
const startedAt = new Date().toISOString();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/info", (_req, res) => {
  res.json({
    service: "shipyard-demo",
    hostname: os.hostname(),
    startedAt,
    env: process.env.APP_ENV ?? "local",
    message: process.env.WELCOME_MESSAGE ?? "Hello from Shipyard",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`shipyard-demo listening on http://0.0.0.0:${port}`);
});
