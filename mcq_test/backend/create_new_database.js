const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('mcq_test.db')

// db.run(`CREATE TABLE users (
//     sr_no INTEGER PRIMARY KEY AUTOINCREMENT,
//     id CHAR(36),
//     name TEXT NOT NULL,
//     class TEXT NOT NULL,
//     username TEXT UNIQUE NOT NULL,
//     password TEXT NOT NULL,
//     email TEXT UNIQUE NOT NULL,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
// )`)
// db.run(`INSERT INTO admins (username, email, password, role, created_at, updated_at)
// VALUES ('AnotherUser', 'AnotherUser@gmail.com','AnotherPassword',  'admin', current_timestamp, current_timestamp);`)
// db.run(`insert into admins (id, name) values (1, 'faiz')`)
// db.all(`select * from admins`, (error, rows)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(rows)
//     }
// })
// db.run('drop table admins')
// db.run('alter table admins modiy id ')
// db.run(`delete from admins where username = 'FaizullaSyed'`)
