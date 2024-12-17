import express from 'express'

const app = express();

const port = 3000

app.use(express.json())

// create an array for storing the fruits
let storeFruits = []
let nextId = 1

// to store array elements to add new fruit
app.post('/send', (req, res) => {
    const { name, price } = req.body
    const NewObject = { id: nextId++, name, price }
    storeFruits.push(NewObject)
    res.status(201).send(NewObject)
})

// to get or recieve all the array items
app.get('/send', (req, res) => {
    res.status(200).send(storeFruits)
})

// to get pr receive any particular data or get fruit with id
app.get('/send/:id', (req, res) => {
    const fruit = storeFruits.find(f => f.id === parseInt(req.params.id))  //anything comes at id is in string format so we need to convert it into string thats why we used parseInt
    if (!fruit) {
        return res.status(404).send("fruit not found")
    }
    res.status(200).send(fruit)

})

// to update the fruits
app.put('/send/:id', (req, res) => {
    const fruit = storeFruits.find(f => f.id === parseInt(req.params.id))
     if (!fruit) {
        return res.status(404).send("fruit not found")
    }

    const { name, price } = req.body
    fruit.name = name
    fruit.price = price
    res.send(200).send(fruit);
})

// delete fruit
app.delete('/send:id', (req, res) => {
    const index = storeFruits.findIndex(f => f.id === parseInt(req.params.id))
    if (index === -1) {
        return res.status(404).send("fruit not found")
    }
    storeFruits.splice(index, 1)
   return res.status(202).send("data has been deleted")
})


app.get("/", (req, res) => {
    res.send("Hello this is Pranav");
})

app.get("/meta", (req, res) => {
    res.send("Hello this is meta port");
})

app.get("/cool", (req, res) => {
    res.send("Hello this is cool port");
})



app.listen(port, () => {
  console.log(`server is listening on port ${port}...`)
})