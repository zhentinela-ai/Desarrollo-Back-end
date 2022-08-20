export const queries = {
  getProducts: `SELECT * FROM productos`,
  getProductsOrderBy: (query, conn) =>
    `SELECT * FROM productos ORDER BY ${conn.escape(query)}`,
  getProduct: (id) => `SELECT * FROM productos WHERE id=${id}`,
  createProduct: (product, conn) =>
    `INSERT INTO productos (${Object.keys(product)}) VALUES (${conn.escape(
      Object.values(product)
    )})`,
  updateProduct: (id, { nombre, cantidad, precio }, conn) =>
    `UPDATE productos SET nombre=${conn.escape(nombre)}, cantidad=${conn.escape(
      cantidad
    )}, precio=${conn.escape(precio)} WHERE id=${id}`,
};
