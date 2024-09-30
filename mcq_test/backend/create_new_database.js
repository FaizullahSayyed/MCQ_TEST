const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.join(__dirname, 'database', 'mcq_test.db');
const db = new sqlite3.Database(dbPath);

// db.run(`CREATE TABLE users (
//     id CHAR(36) PRIMARY KEY,
//     fullname TEXT NOT NULL,
//     username TEXT UNIQUE NOT NULL,
//     password TEXT NOT NULL,
//     email TEXT UNIQUE NOT NULL
// )`)
// db.run(`INSERT INTO users (id, name, class, username, password, email, phone_no, created_at, updated_at, role) VALUES ('1','user1', 'class1','username1',  'password1', 'usrname1@gmail.com', 1234567890, current_timestamp,current_timestamp, 'student');`)
// db.run(`insert into admins (id, name) values (1, 'faiz')`)
// db.all(`select * from users`, (error, rows)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(rows)
//     }
// })
// db.run('drop table users')
// db.run('alter table admins modiy id ')
// db.run(`delete from admins where username = 'FaizullaSyed'`)
// db.run(`alter table users add column phone_no int(10) default unknown`)
// db.close()