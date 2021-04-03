/* All product related routing is written here */
//import the product class created in models folder
const Product = require('../models/product.js');

//export it to be used in admin.js 
exports.getAddProduct =  (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product',{
      pageTitle : "Add Product",
      path : "/admin/add-product" ,
      pageTitle: 'Add Product',
      activeAddProduct : true,
      formsCss: true,
      productCss: true});
  }
exports.postAddProduct=(req, res, next) => {
    const prod= new Product(req.body.title);
    prod.save();
    res.redirect('/');
  }

exports.getProducts=(req, res, next) => {
    Product.fetchAll(products=> {
      res.render('shop', {prods: products, docTitle: 'Shop', path: '/', pageTitle: 'Shop',
      hasProds:products.length >0 , activeShop : true, productCss: true})
    });
   
  };