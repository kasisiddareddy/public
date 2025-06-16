const products = [
  {
    name: "Fresh Apples",
    image: "https://source.unsplash.com/200x150/?apples",
    price: "₹120 / kg"
  },
  {
    name: "Bananas",
    image: "https://source.unsplash.com/200x150/?bananas",
    price: "₹40 / dozen"
  },
  {
    name: "Tomatoes",
    image: "https://source.unsplash.com/200x150/?tomatoes",
    price: "₹30 / kg"
  },
  {
    name: "Milk",
    image: "https://source.unsplash.com/200x150/?milk",
    price: "₹50 / litre"
  }
];

const cartCount = document.getElementById("cart-count");
const productList = document.getElementById("product-list");
let cart = 0;

function renderProducts() {
  products.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart() {
  cart++;
  cartCount.textContent = cart;
}

renderProducts();
