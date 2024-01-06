const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
require('colors')

const app = express()
app.use(bodyParser.json())

let users = [
    {
        id : 1,
        username: 'heyder',
    },
    {
        id : 9,
        username: 'heyder',
    },
    {
        id : 6,
        username: 'abbas',
        national: 'padarginal YERAZ'
    }
]

app.get('/code/users', (req,res) => {
    res.json(users)
}
)

app.delete('/code/users/:id', (req,res) => {
    const { id } = req.params
    users = users.filter((item) => item.id != id)
    res.json('User deleted succesfully!')

}
)

app.post('/code/users' , (req,res) => {
    const userbody = req.body
    users.push(userbody)
    res.send('User added succesfully!')
}
)






const PORT = process.env.PORT

app.listen(PORT,() => console.log( `Server is running: http://localhost:${PORT}`))