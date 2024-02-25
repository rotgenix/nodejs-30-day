const mongoose = require('mongoose');
const express = require('express');
const Product = require('./ProductSchema');

const app = express();
app.use(express.json());

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/test-nodejs")
        .then((e) => {
            console.log("DB Connected");
        })
        .catch((e) => {
            console.log("Db error");
        });
}
connectDB();

app.post('/createProduct', async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const product = await Product.create({
            name, price, quantity
        });

        return res.json({
            success: true,
            message: "Product Crated Successfully",
            product
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "Internal server error"
        })
    }

});

app.get('/getAllProducts', async (req, res) => {
    try {
        const products = await Product.find();

        return res.json({
            success: true,
            message: "All Products",
            products
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "Internal server error"
        })
    }

});

app.put('/updateProduct/:productId', async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const { productId } = req.params;
        const product = await Product.findOne(
            { _id: productId },
        );

        product.name = name || product.name;
        product.price = price || product.price;
        product.quantity = quantity || product.quantity;
        await product.save();

        return res.json({
            success: true,
            message: "Product Updated Successfully",
            product
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "Internal server error"
        })
    }

});

app.delete('/deleteProduct/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        console.log(productId)
        const product = await Product.findOneAndDelete({
            _id: productId
        });
        console.log(product)
        return res.json({
            success: true,
            message: "Product Deleted Successfully",
            product
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "Internal server error"
        })
    }

})

app.listen(5000, () => {
    console.log("Server is Running on PORT:5000")
});