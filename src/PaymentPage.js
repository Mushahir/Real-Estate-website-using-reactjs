import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const PaymentPage = () => {
  const [paymentAmount, setPaymentAmount] = useState(1000); // Amount in cents
  const stripePromise = loadStripe('your_stripe_publishable_key');

  const handlePayment = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/your-payment-endpoint', {
      method: 'POST',
      body: JSON.stringify({ amount: paymentAmount }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <p>Amount: ${paymentAmount / 100}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
