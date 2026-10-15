import api from "./api";

const productApi = {

    getStockFaible: () => api.get("/products/stock-faible"),

    getCategorie: (params) => api.get("/products/search", {params}),

    getProduct: () => api.get("/products/findProduct"),

    getAll: () => api.get("/products"),

    getById: (id) => api.get(`/products/${id}`),

    create: (product) => api.post("/products", product),

    update: (id, product) => api.put(`/products/${id}`, product),

    delete: (id) => api.delete(`/products/${id}`)
};

export default productApi;