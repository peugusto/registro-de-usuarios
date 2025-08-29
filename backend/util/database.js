import mysql from 'mysql2'

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'userstorage',
    password:'*'
})

const db = pool.promise();
export default db