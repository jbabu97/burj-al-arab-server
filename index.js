const express = require('express')
const cors = require('cors');


const port = 4000;

const pass = "jbabu1997";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors);


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://burzJbdb:jbabu1997@cluster0.etzpx.mongodb.net/burzJb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const bookingCollection = client.db("burzJb").collection("booking");
  console.log('database connected successfully');
  
  app.post('/addBooking', (req, res) => {
    const newBooking = req.body;
    console.log(newBooking);
  })
  // client.close();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})