import { pool } from "../db/db.js";

export const pingController = async (req, res) => {
  const [result] = await pool.query('SELECT "PONG" AS result');
  res.json(result[0]);
};
