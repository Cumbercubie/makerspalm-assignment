import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  const response = await fetch(`${process.env.API_URL}/products`);
  const data = await response.json();
  return data;
});
