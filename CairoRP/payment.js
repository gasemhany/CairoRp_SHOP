  // Toggle visibility of payment method details
  const paymentOptions = document.querySelectorAll('input[name="payment-method"]');
  const creditCardDetails = document.getElementById('credit-card-details');
  const vodafoneDetails = document.getElementById('vodafone-details');

  paymentOptions.forEach(option => {
      option.addEventListener('change', function () {
          if (this.value === 'Credit Card') {
              creditCardDetails.classList.remove('hidden');
              vodafoneDetails.classList.add('hidden');
          } else if (this.value === 'Vodafone') {
              vodafoneDetails.classList.remove('hidden');
              creditCardDetails.classList.add('hidden');
          } else {
              creditCardDetails.classList.add('hidden');
              vodafoneDetails.classList.add('hidden');
          }
      });
  });

  // Handle form submission
  const paymentForm = document.getElementById('payment-form');
  paymentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Payment submitted successfully!');
  });