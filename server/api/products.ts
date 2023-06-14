export default defineEventHandler(async (event) => {
  console.log("config-api", process.env);
  const response = await fetch(`${process.env.API_URL}/products`);
  const data = await response.json();
  return data;
});
