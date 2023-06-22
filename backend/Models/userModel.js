const { Pool } = require('pg');
const pool = new Pool();

const createUser = async (username, password) => {

    const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
    return result;
};

const getUser = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
};


export default {createUser, getUser}
