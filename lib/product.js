const AllProducts = require('../data/all-product.json')

export const filterByType = (type) => {
  const product = AllProducts.filter((item) => item.type = type)
  return product
}