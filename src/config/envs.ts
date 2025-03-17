import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PGHOST: get("PGHOST").required().asString(),
  PORT: get("PORT").required().asPortNumber(),
  PGUSER: get("PGUSER").required().asString(),
  PGPASSWORD: get("PGPASSWORD").required().asString(),
  PGDATABASE: get("PGDATABASE").required().asString(),
  PGPORT: get("PGPORT").required().asPortNumber()
}