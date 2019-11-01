module.exports = {
    getProducts: async (req,res) => {
        console.log('getProducts hit')
        const db = req.app.get('db')

        let products = await db.get_products()

        res.status(200).send(products)
    }
}