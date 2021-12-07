const app = require('./src/app')

app.listen(process.env.PORT, () => {
  console.log(`Server Established and listening on port ${process.env.PORT}`)
})