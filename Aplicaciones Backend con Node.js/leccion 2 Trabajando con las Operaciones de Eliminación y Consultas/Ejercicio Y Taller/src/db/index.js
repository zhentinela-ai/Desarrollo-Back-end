import { createPool } from "mysql";

import "../config.js";

export const pool = createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "tienda",
});
