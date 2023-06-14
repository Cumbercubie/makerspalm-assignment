export default defineEventHandler(async (event) => {
  const response = await fetch(
    `https://mp-ecommerce-test-36ayz.ondigitalocean.app/products/${
      getQuery(event).id
    }`
  );
  const data = await response.json();
  // console.log("product response", data, getQuery(event));
  return data;
});
