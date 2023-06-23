import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

pool.connect();


const createUser = async (username, password) => {

    const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
    pool.end;
    return result;
};

const getUser = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    pool.end;
    return result.rows[0];
};


export default {createUser, getUser}
