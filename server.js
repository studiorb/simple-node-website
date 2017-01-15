const express = require('express')
const pug = require('pug')
const app = express()

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  res.render('home', { title: 'Home', header: 'The Home Page', home: true })
})

app.get('/about', function (req, res, next) {
  res.render('about', { title: 'About', header: 'The About Page', about: true })
})

app.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact', header: 'The Contact Page', contact: true })
})

app.use(function (req, res, next) {
  res.status(404).render('errors', { title: '404', errors: '404 Page Not Found' })
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).render('errors', { title: '500', errors: 'Error 500' })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
