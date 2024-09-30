db.run(`CREATE TABLE users (
    id CHAR(36) PRIMARY KEY,
    fullname TEXT NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
)`)