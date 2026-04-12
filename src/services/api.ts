import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapiserver.reactbd.org/api",
});