console.clear()
const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {res.render('index')})
app.get('/invite', (req,res) => {res.redirect('https://discord.gg/SGpgYHrSrv')})

app.listen(443, () => {
    console.log("Listening to server port 80")
})