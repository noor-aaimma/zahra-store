import axios from "axios";

const API_URL = "http://localhost:5000/api/products"; // Change to your backend URL

export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addProduct = async (productData) => {
  const res = await axios.post(API_URL, productData);
  return res.data;
};
