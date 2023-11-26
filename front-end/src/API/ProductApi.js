import API from "./Api";

// lay danh sach Product
const getListProductAPI = (page, size) => {
    return API("GET", `products?page=${page}&size=${size}`, null);
};

// lay danh sach Product theo categoryName
const getListProductAPIFilter = (categoryName) => {
    return API("GET", "products?categoryName=" + categoryName, null);
};

// lay danh sach Product theo name
const getListProductAPISearch = (name) => {
    return API("GET", "products?search=" + name, null);
};

// lay danh sach product theo sort price
const getListProductAPISort = (sortPrice) => {
    return API("GET", "products?sort=" + sortPrice, null);
};

// Add New Product
const addProductNewAPI = (productNew) => {
    return API("POST", "products", productNew);
};


// Delete Product
const deleteProductAPI = (id) => {
    return API("DELETE", "products/" + id, null);
};


// Update Product
const updateProductAPI = (productUpdate) => {
    return API("PUT", "products/" + productUpdate.id, productUpdate);
};

const api = { getListProductAPI, getListProductAPIFilter, getListProductAPISearch, getListProductAPISort, addProductNewAPI, deleteProductAPI, updateProductAPI}

export default api;