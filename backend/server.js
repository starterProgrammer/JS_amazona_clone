const express = require('express')
const cors = require('cors')
const { products } = require('./data.js')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/api/products', (req, res) => {
    res.send(products)
})


app.listen(3000, () => console.log(`server is running on http://localhost:3000`));