document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

// Utility to get/set cart count in localStorage
function getCartCount() {
  return parseInt(localStorage.getItem('cartCount') || '0', 10);
}
function setCartCount(count) {
  localStorage.setItem('cartCount', count);
  updateCartCountUI();
}
function updateCartCountUI() {
  const cartCountEls = document.querySelectorAll('#cartCount');
  const count = getCartCount();
  cartCountEls.forEach(el => el.textContent = count);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCountUI();

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      let count = getCartCount();
      setCartCount(count + 1);
    });
  });
});
