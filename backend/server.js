import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req,res)=>{
    res.send(data.products);
});

app.get("/api/products/:id" , (req,res)=>{
    const productId = req.params.id;
    const product = data.products.find(x=> x._id === productId);
    if(product){
        res.send(product)
    }
    else{
        res.status(404).send({msg: "hey, there . the product you are looking for doesnt exist. sorrrrry, " }) ;
    }
    
})

app.listen(5000 , ()=>{
    console.log("server created at http://localhost:5000");
});