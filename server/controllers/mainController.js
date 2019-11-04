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
    }
}