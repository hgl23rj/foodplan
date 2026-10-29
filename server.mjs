import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import routes from "./public/manus-routes.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static(__dirname));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/api/routes", (_, res) => {
  res.json(routes);
});

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`TBCA Web running on http://localhost:${port}`);
});
