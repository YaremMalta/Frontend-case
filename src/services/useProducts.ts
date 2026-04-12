import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./products";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};