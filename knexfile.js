require('dotenv').config();

module.exports = {
    client: 'mysql2',
    connection: {
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    },
    pool: { min: 1, max: 100 }
};