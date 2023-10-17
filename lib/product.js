const AllProducts = require('../data/all-product.json')

export const filterByType = (type) => {
  return AllProducts.filter((item) => item.type === type)
}