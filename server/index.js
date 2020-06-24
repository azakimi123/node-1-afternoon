const express = require('express');
// const products = require('../products.json');
const ctrl = require('./controller');


const app = express();


app.use(express.json());


//endpoints 
//get all products
app.get('/api/products', ctrl.getProducts);
//get single item
app.get('/api/product/:id', ctrl.getSingleItem);
//get item by price
app.get('/api/product', ctrl.getProductByPrice);
//put
app.put('/api/product/:id', ctrl.changePrice);

app.listen(3040, () => console.log('Server is running on 3040'));