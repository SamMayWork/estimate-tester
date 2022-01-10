const express = require('express')
const app = express()

app.use(express.json())

const data = []

const printRequest = (req, res, next) => {
  console.log(`Request for ${req.method}`)
  next()
}

app.use(printRequest)

app.get('/', (req, res) => {
  res.send('OK')
})

app.post('/api/data', (req, res) => {
  data.push(req.body)
  res.sendStatus(200)
})

app.all('*', (req, res) => {
  res.sendStatus(404)
})

module.exports = app