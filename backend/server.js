// Convert Common Js to EcmaScript
import express from 'express'
import cors from 'cors'
import data from './data.js'

const app = express()

app.use(express.json())
app.use(cors())


app.get('/api/products', (req, res) => {
    res.send(data.products)
})


app.listen(3000, () => console.log(`server is running on http://localhost:3000`));