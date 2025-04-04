// Global State
const productsData = [];
const cartItems = [];

// DOM References
const DOM = {
  searchForm: document.querySelector('[data-js="search-form"]'),
  searchInput: document.querySelector('[data-js="search-input"]'),
  cartBtn: document.querySelector('[data-js="cart-btn"]'),
  cartCount: document.querySelector('[data-js="cart-count"]'),
  productGrid: document.querySelector('[data-js="product-grid-container"]'),
};

// Loads product data from JSON and renders the initial UI
async function loadProducts() {
  try {
    const response = await fetch("./data/products.json");
    const data = await response.json();
    productsData.push(...data);
    console.log(productsData);
  } catch (error) {
    console.error("Failed to load product data:", error);
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});
