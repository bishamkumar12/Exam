const products = [
  {
    name: "Scooter",
    price: 199.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Scooter",
  },
  {
    name: "Headphones",
    price: 99.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Headphones",
  },
  {
    name: "Smartphone",
    price: 599.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Smartphone",
  },
  {
    name: "Laptop",
    price: 999.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Laptop",
  },
  {
    name: "Watch",
    price: 149.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Watch",
  },
  {
    name: "Sunglasses",
    price: 49.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Sunglasses",
  },
  {
    name: "Backpack",
    price: 79.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Backpack",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Gaming%20Console",
  },
];

const container = document.getElementById("product-container");

// Function to add product to cart
function addToCart(product) {
  const cart = JSON.parse(sessionStorage.getItem('shopping-cart')) || [];
  cart.push(product);
  sessionStorage.setItem('shopping-cart', JSON.stringify(cart));
  showCartTable();
}

// Function to display cart content
function showCartTable() {
  const cartDiv = document.getElementById('cart');
  const cartItems = JSON.parse(sessionStorage.getItem('shopping-cart')) || [];
  
  let cartHtml = '<h2>Cart</h2>';
  cartHtml += '<ul>';
  cartItems.forEach(item => {
    cartHtml += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
  });
  cartHtml += '</ul>';
  
  cartDiv.innerHTML = cartHtml;
}

// Render products
products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const image = document.createElement("img");
  image.src = product.imageUrl;
  image.alt = product.name;
  image.classList.add("product-image");

  imageContainer.appendChild(image);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = "$" + product.price.toFixed(2);

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.classList.add("add-to-cart-btn");
  
  // Add click event listener to the "Add to Cart" button
  button.addEventListener('click', () => {
    addToCart(product);
  });

  infoDiv.appendChild(name);
  infoDiv.appendChild(price);
  infoDiv.appendChild(button);

  productDiv.appendChild(imageContainer);
  productDiv.appendChild(infoDiv);

  container.appendChild(productDiv);
});

// Show initial cart content
showCartTable();
