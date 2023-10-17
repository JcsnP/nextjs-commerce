const AllProducts = require('../data/all-product.json')

export const filterByType = (type) => {
  return AllProducts.filter((item) => item.type === type)
}

export const findById = (productId) => {
  return AllProducts.find(({ id }) => id === parseInt(productId));
}