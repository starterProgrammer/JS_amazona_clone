// Convert Common Js to EcmaScript
import express from 'express'
import cors from 'cors'
// eslint-disable-next-line semi
import data from './data'

const app = express()

app.use(express.json())
app.use(cors())

// eslint-disable-next-line no-multiple-empty-lines

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.get('/api/product/:id', (req, res) => {
  const { id } = req.params
  const findItem = data.products.find((item) => item._id === id)
  res.send(findItem)
})


app.listen(3000, () => console.log('server is running on http://localhost:3000'));
