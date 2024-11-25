import { readFileSync, writeFileSync } from "fs";

const groups = readFileSync("./groupObject.ts", "utf-8")
const toJson = JSON.stringify(groups, null, 2)
writeFileSync("app.json", toJson)