module.exports = {
    getProducts: async (req,res) => {
        // console.log('getProducts hit')
        const db = req.app.get('db')

        let products = await db.get_products()

        res.status(200).send(products)
    },
    getSpecificProduct: async (req,res) => {
        // console.log('get specific product hit')
        const db = req.app.get('db')
        const {id} = req.params

        let product = await db.get_specific_product(id)
        product = product[0]
        // console.log(product)
        
        res.status(200).send(product)
    },
    addToCart: (req, res) => {
        // console.log('add to cart backend function hit')
        const {name, collection, size, price, scent, description, img, quantity, product_id} = req.body
        
        let item = {
            name,
            collection, 
            size,
            price,
            scent,
            description,
            img,
            quantity,
            product_id
        }
        if (!req.session.cart){
            req.session.cart = []
        }
        
        req.session.cart.push(item)
        // console.log(req.session.cart)
        res.status(200).send(req.session.cart)

    },
    getCart: (req,res) => {
        if(req.session.cart){
            return res.status(200).send(req.session.cart)
        }
        return res.sendStatus(200)
    },
    updateCart: (req, res) => {
        console.log('updateCart backend function fired', req.session.cart)
        const {quantity, id} = req.body
        for(let i = 0; i < req.session.cart.length; i++)
        {
            if(req.session.cart[i].product_id === id){
                req.session.cart[i].quantity = quantity
            }
        }
        res.status(200).send(req.session.cart)
        
        
    },
    deleteItem : (req,res) => {
        const {id} = req.params
        console.log('deleteItem backend function hit', id)
        console.log(req.session.cart)
        for(let i = 0; i < req.session.cart.length; i++){
            console.log(req.session.cart[i].product_id)
            if(req.session.cart[i].product_id === +id){
                req.session.cart.splice(i, 1)
            }
            
        }
        res.status(200).send(req.session.cart)
    },
    clearCart: (req, res) => {
        console.log('clearcart', req.session)
        req.session.cart = []
        res.sendStatus(200)
    }
}