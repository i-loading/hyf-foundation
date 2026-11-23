import { getAvailableProducts } from "./hyfBayHelpers.js";

console.log("Module script loaded");

const products = getAvailableProducts();
const productsList = document.getElementById("productsList");

function renderProducts(productsToRender) {
  productsList.innerHTML = "";

  for (let i = 0; i < productsToRender.length; i++) {
    const product = productsToRender[i];

    const li = document.createElement("li");

    const title = document.createElement("h2");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${product.rating}`;

    li.appendChild(title);
    li.appendChild(price);
    li.appendChild(rating);

    productsList.appendChild(li);
  }
}

renderProducts(products);
