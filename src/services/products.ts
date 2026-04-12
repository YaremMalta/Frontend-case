import { api } from "./api";

export const getProducts = async () => {
  const res = await api.get("/products");

  console.log("FULL RESPONSE:", res.data);

  return res.data.data; 
};