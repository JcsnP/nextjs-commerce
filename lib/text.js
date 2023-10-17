export const readableDescription = (text) => {
  return text.length > 180 ? text.slice(0, 180) + '...' : text
}