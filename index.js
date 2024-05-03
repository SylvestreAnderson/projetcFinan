const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn.js')

const Users = require('./models/Users.js')

const userRouter = require('./router/usersRoutes.js')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/users', userRouter)

conn.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))

