import axios from "axios";

const fetchProducts = async () => {
  const response = await axios.get(
    "https://fastcure.onrender.com/api/products?populate=*"
  );

  const Products = [];

  // Assuming response.data.data is an array
  for (let i = 0; i < response.data.data.length; i++) {
    let product = {
      productImg:
        response.data.data[i].attributes.productImg.data[0].attributes.url,
      productName: response.data.data[i].attributes.productName,
      productPrice: response.data.data[i].attributes.productPrice,
      description: response.data.data[i].attributes.description,
      genre: response.data.data[i].attributes.genre,
      type: response.data.data[i].attributes.type,
    };
    Products.push(product);
  }
  localStorage.setItem("Products", JSON.stringify(Products));
};

export default fetchProducts;
