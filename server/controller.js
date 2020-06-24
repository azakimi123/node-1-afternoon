const products = require('../products.json');

let id = 9;


module.exports = {

    //get
    getProducts: (req, res) => {
        // console.log(req.query)
        res.status(200).send(products);
    },

    getSingleItem: (req, res) => {
        // console.log(req.params);
        // console.log(req.query)
        let item = products.find( e => e.id === +req.params.id);
        if(item) {
            res.status(200).send(item);
        } else {
            res.status(500).send('Item not in list');
        }
    },

    getProductByPrice: (req, res) => {
        if (req.query.price) {
            let items = products.filter( e => e.price >= +req.query.price);
            res.status(200).send(items);
            // console.log(items);
        } else {

            res.status(200).send('the if statement is broken');
        }
    },

    //put
    changePrice: (req, res) => {
        let index = products.findIndex( e => e.id === +req.params.id);
        products[index].price = req.body.price;
        if(req.body.img_url === undefined) {
            products[index].img_url = products[index].img_url
        } else {
            products[index].img_url = req.body.img_url;
        }

        res.status(200).send(products);
    }
}
