/* Define product structure */
const fs= require('fs');
const path= require('path');
//create 'data' folder in root dir path with file name as 'product.json'
const p= path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json');
    
//helper fxn to define path of file and read data from it
const getProductsFromFile= callBack=>{
    fs.readFile(p, (err,fileContent)=>{
        if(err){
          return   callBack([]);
        }
         return callBack(JSON.parse(fileContent));
       });
}

//const products= [];
module.exports =class Product{
    constructor(t){
    this.title=t;
    }

    save(){
    //first read file to fetch existing products
    getProductsFromFile(products=> {
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
        console.log(err);
        });
    });

    }

    //callback allowed me to go to controller and fetch prod after reading from file finishes
    static fetchAll(callBack){
       getProductsFromFile(callBack);
    }
}