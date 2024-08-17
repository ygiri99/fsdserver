import products from "../models/productModel.js";

//Getting products
export const getProducts = async (req, res) => {
    try {
        const data = await products.find({});
        if (!data) (res.status(404).send(`products not found`));
        else (res.status(200).send(data));
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
}

//Adding products
export const addProduct = async (req, res) => {
    try {
        let data = await products.insertMany(req.body.data);
        res.status(201).send(`Data added successfully ${data}`);
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
}

//Updating products
export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const dataForUpdate = req.body.data;
        await products.findByIdAndUpdate({ _id: id }, dataForUpdate);
        res.status(200).send(`Product updated`);
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
}

//Deleting products
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await products.findByIdAndDelete({ _id: id });
        res.status(200).send(`Product deleted`);
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
}