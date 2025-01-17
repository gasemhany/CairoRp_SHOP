 // Get all products and attach event listeners
 document.querySelectorAll('.product').forEach((product) => {
    const quantityInput = product.querySelector('.quantity');
    const priceDisplay = product.querySelector('.price-display');
    const basePrice = parseFloat(product.getAttribute('data-price'));

    // Event Listener for Quantity Change
    quantityInput.addEventListener('input', () => {
        const quantity = parseInt(quantityInput.value) || 1; // Fallback to 1 if invalid input
        const totalPrice = quantity * basePrice;
        priceDisplay.textContent = `Price: ${totalPrice} $`;
    });
});
function sendProducts() {
    // إنشاء قائمة المنتجات
    const products = [
        { name: "منتج 1", quantity: document.getElementById('quantity1').value },
        { name: "منتج 2", quantity: document.getElementById('quantity2').value },
        { name: "منتج 3", quantity: document.getElementById('quantity3').value },
        { name: "منتج 4", quantity: document.getElementById('quantity3').value },
    ];
}
   
  // الحصول على كل العناصر <li>
  const menuItems = document.querySelectorAll('nav ul li');

  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          const targetId = item.getAttribute('data-target'); // الحصول على id الهدف
          const targetElement = document.getElementById(targetId); // استدعاء العنصر الهدف

          // التمرير إلى القسم
          targetElement.scrollIntoView({ behavior: 'smooth' });
      });
  });

  window.addEventListener('load', function () {
    const products = document.querySelectorAll('.product');
    
    // إضافة الكلاس show لكل منتج عند تحميل الصفحة
    products.forEach((product, index) => {
        setTimeout(() => {
            product.classList.add('show');
        }, index * 300); // تأخير كل منتج بمقدار 300 ملي ثانية
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartDropdown = document.getElementById("cart-dropdown");

    // Add to cart functionality
    document.querySelectorAll(".product .btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.getAttribute("data-price");
            const quantity = product.querySelector(".quantity").value;

            // Add product to cart array
            cart.push({
                name: productName,
                price: productPrice,
                quantity: quantity,
            });

            // Update cart count
            cartCount.textContent = cart.length;

            // Show a message (optional)
            alert(`${productName} added to cart!`);
        });
    });

    // Toggle cart dropdown on click
    const cartIcon = document.querySelector(".bx-cart");
    let isDropdownOpen = false;

    cartIcon.addEventListener("click", () => {
        isDropdownOpen = !isDropdownOpen;  // Toggle the dropdown open/close
        if (isDropdownOpen) {
            updateCartDisplay();
            cartDropdown.style.display = "block";
        } else {
            cartDropdown.style.display = "none";
        }
    });

    // Keep the dropdown open when mouse enters the cart icon
    cartIcon.addEventListener("mouseenter", () => {
        if (isDropdownOpen) {
            cartDropdown.style.display = "block";
        }
    });

    // Hide dropdown on mouse leave only if it is not opened by click
    cartIcon.addEventListener("mouseleave", () => {
        if (!isDropdownOpen) {
            cartDropdown.style.display = "none";
        }
    });

    // Update cart items display
    function updateCartDisplay() {
        cartItems.innerHTML = ""; // Clear the list
        if (cart.length === 0) {
            cartItems.innerHTML = "<li>Your cart is empty!</li>";
        } else {
            cart.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = `${item.quantity} x ${item.name} - $${item.price}`;
                cartItems.appendChild(li);
            });
        }
    }
});



