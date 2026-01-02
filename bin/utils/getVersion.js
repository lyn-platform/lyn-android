import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

export default function getVersion() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const packagePath = join(__dirname, "../..", "package.json");
  const packageJson = JSON.parse(readFileSync(packagePath, "utf-8"));
  return packageJson.version;
}