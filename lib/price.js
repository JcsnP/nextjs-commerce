export const readablePrice = (price) => {
  return '$' + price.toLocaleString("en-US");
}