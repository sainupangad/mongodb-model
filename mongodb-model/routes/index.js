var express = require('express');
var router = express.Router();
let productHelper=require('../helpers/product_helper')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login Form' });
});

router.get('/all-products', async function(req, res, next) {
  let productList=await productHelper.getAllProducts()
  console.log(productList)
  res.render('second', {products:productList});
});

router.post('/',async function(req, res, next) {
  let addProduct=productHelper.addProduct(req.body)
  addProduct.then((product)=>{
    console.log(product)
  })
    
  let si = req.body
 
  
  let rp = si.uname
  res.redirect('/all-products')
})


module.exports = router;
