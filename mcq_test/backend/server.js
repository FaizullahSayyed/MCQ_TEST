const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3')


const app = express()
const port = 4000
const db = sqlite3.Database;

app.use(express.json())
app.use(cors())

app.post('/login', (req, res) => {
  console.log(req.body)
  const {username, password} = req.body
  // userDetails = db.get('select username, password from admins where username = ?',[])
  console.log(`response from server ${username}`)
  res.send('data recived')
})

app.listen(port,()=>{
  console.log('running on',port)
})