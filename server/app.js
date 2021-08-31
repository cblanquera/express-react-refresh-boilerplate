const path = require('path')
const express = require('express')
const renderReact = require('./renderReact')
const devMiddleware = require('./devMiddleware')

const app = express()

devMiddleware(app)

// static assets server from the "dist" folder
app.use(express.static(path.join(__dirname, '../dist'), { index: false }))
app.use(express.json())
app.use(express.urlencoded())

app.get('/*', renderReact)

// 404 not found
app.use((req, res) => {
  return res.send('errors/404');
});

// unhandled error handling
app.use((err, req, res, next) => {
  console.log(err);
  return res.json(err);
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.info([`App is listening on port ${port}!`])
})
