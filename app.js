const express = require('express')

const app = express()

const myLogger = (req, res, next) => {
    console.log("Middleware Log 1")
}
app.use(express.static(''))
app.use(myLogger)
app.get('/', (req, res) => {

    const photo = {
        id: 1,
        name: "photo name",
        description: "photo"
    }
    res.send(photo)
})

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`)
})