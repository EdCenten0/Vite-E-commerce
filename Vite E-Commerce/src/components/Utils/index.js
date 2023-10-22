/**
 * This function is made to calculate total price of products for an new order
 * @param {Array} products cartProducts is an object array
 * @returns {number} Total price of all products, this products are multiplied with their current count
 */

export const totalPrice = (products) => {
  const total = products.reduce(
    (count, product) => count + product.price * product.count,
    0
  );

  return total;
};
