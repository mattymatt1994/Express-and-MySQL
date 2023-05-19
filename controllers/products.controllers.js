import query from "../db/utils";


const findAll = async () => {
return query ("SELECT * from products");
}

const findOne = async (ProductID) => {
return query ("Select products.ProductID from products", [ProductID]);
}

const addOne = async (newProductData) => {
    return query ("INSERT INTO products SET ?", newProductData);
}

async function updateOne (productID, updatedPrice) {
    return query ("update products SET ? where ProductID = ?", [productID, updatedPrice]);
}

async function removeOne (productID) {
    return query ("delete from products where ProductID = 5", productID);
}

export default {
    findAll,
    findOne,
    addOne,
    updateOne,
    removeOne
};