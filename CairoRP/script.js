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


