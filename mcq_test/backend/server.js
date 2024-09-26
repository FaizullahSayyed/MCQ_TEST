const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3')
const path = require('path')
const uuid = require('uuid')

const app = express()
const port = 4000

const dbPath = path.join(__dirname,'database','mcq_test.db')
const db = sqlite3.Database('mcq_test.db');

app.use(express.json())
app.use(cors())

app.post('/login', (req, res) => {
  console.log(req.body)
  const {username, password} = req.body
  // userDetails = db.get('select username, password from admins where username = ?',[])
  console.log(`response from server ${username}`)
  res.send({data: 'data.....'})
})

app.post('/signup',(req, res) => {
  const  {fullName, selectedOption, username, password, email, phoneNo} = req.body
  db.run(`INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)`,[uuid(), fullName, selectedOption, username, password, email, phoneNo])
  res.send('signedup successfull')
})

app.listen(port,()=>{
  console.log('running on',port)
})