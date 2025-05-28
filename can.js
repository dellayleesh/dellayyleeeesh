// ===== Toggle Elements =====
const navbarNav = document.querySelector(".navbar-nav");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const shoppingCart = document.querySelector(".shopping-cart");

// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector("#hamburger-menu");
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// ===== Search Form Toggle =====
document.querySelector("#search-button").onclick = (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchBox.focus();
};

// ===== Shopping Cart Toggle =====
document.querySelector("#shopping-cart-button").onclick = (e) => {
  e.preventDefault();
  shoppingCart.classList.toggle("active");
};

// ===== Klik di luar navbar, search, cart =====
document.addEventListener("click", function (e) {
  if (
    !navbarNav.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }

  if (
    !searchForm.contains(e.target) &&
    !e.target.closest("#search-button")
  ) {
    searchForm.classList.remove("active");
  }

  if (
    !shoppingCart.contains(e.target) &&
    !e.target.closest("#shopping-cart-button")
  ) {
    shoppingCart.classList.remove("active");
  }
});

// ===== Fungsi Tambah ke Keranjang =====
function addToCart(name, img, price) {
  const cart = document.querySelector(".shopping-cart");
  const item = document.createElement("div");
  item.classList.add("cart-item");

  item.innerHTML = `
    <img src="${img}" alt="${name}" />
    <div class="item-deatil">
      <h3>${name}</h3>
      <div class="item-price">${price}</div>
    </div>
    <i data-feather="trash-2" class="remove-item" onclick="this.parentElement.remove()"></i>
  `;

  cart.appendChild(item);
  feather.replace(); // Refresh ikon Feather
}

// ===== Smooth Scroll ke Menu saat "Beli Sekarang" diklik =====
document.querySelectorAll('a[href="#menu"]').forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#menu");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

