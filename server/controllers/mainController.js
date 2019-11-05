module.exports = {
    getProducts: async (req,res) => {
        console.log('getProducts hit')
        const db = req.app.get('db')

        let products = await db.get_products()

        res.status(200).send(products)
    },
    getSpecificProduct: async (req,res) => {
        console.log('get specific product hit')
        const db = req.app.get('db')
        const {id} = req.params

        let product = await db.get_specific_product(id)
        product = product[0]
        // console.log(product)
        
        res.status(200).send(product)
    },
    addToCart: (req, res) => {
        console.log('add to cart backend function hit')
        const {name, collection, size, price, scent, description, img, quantity} = req.body
        
        let item = {
            name,
            collection, 
            size,
            price,
            scent,
            description,
            img,
            quantity
        }
        if (!req.session.cart){
            req.session.cart = []
        }
        
        req.session.cart.push(item)
        console.log(req.session.cart)
        res.status(200).send(req.session.cart)

    },
    getCart: (req,res) => {
        if(req.session.cart){
            return res.status(200).send(req.session.cart)
        }
        return res.sendStatus(200)
    }
}