let db = require('../config/db')
let COLLECTIONS = require('../config/db_collections')
module.exports = {
    addProduct: (details) => {
        return new Promise(async (resolve) => {
            let product = {
                uname: details.uname,
                psw: details.psw,
                
            }
            let newProduct = await db.get().collection(COLLECTIONS.PRODUCT).insertOne(product)
            if (newProduct) resolve(newProduct.ops[0])
        })
    },
    getAllProducts : () => {
        return new Promise(async (resolve) => {
            let products = await db.get().collection(COLLECTIONS.PRODUCT).find().toArray()
            resolve(products)
        })
    }
}