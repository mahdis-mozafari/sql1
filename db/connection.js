import mysql from "mysql2/promise"
const connection = await mysql.createPool({
    host:'localhost',
    port:5000,
    user:'root',
    password: 1234,
    database:'office'
})

export default connection