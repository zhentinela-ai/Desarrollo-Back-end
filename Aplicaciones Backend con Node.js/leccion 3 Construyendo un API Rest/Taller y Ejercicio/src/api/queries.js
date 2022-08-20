export const queries = {
  getProducts: `SELECT * FROM productos`,
  getProductsOrderBy: (query) => `SELECT * FROM productos ORDER BY ${query}`
  ,
  getProduct: (id) => `SELECT * FROM productos WHERE id=${id}`
};
