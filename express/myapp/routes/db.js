// 连接MySQL
let mysql = require('mysql');
let pool = mysql.createPool({
    host: 'xxxx',
    user: 'xxxx',
    password: 'xxxx',
    database: 'xxx'
});

let query = ((sql,callback)=>{
    pool.getConnection((err,connection)=>{
        connection.query(sql,(err,rows)=>{
            callback(err,rows)
            connection.release();
        })
    })
})
exports.query = query;