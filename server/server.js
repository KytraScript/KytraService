var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var productsModel = require('./models/products.js');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public/'));

mongoose.connect('mongodb+srv://gammazon:ibaraki5647@cluster0-jxvpd.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'gammazon'
})
    .then( () => {
        console.log('CONNECTED TO MONGO!')
    })
    .catch( e => console.log(e));


app.get('/dummy', async (req, res) => {
    const product = await productsModel.find({});

    try {
        res.send(product);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/dummy', async (req, res) => {
    const product = new productsModel(req.body);

    try {
        await product.save();
        res.send(product);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3070, function () {
    console.log('listening on port 3070!');
});