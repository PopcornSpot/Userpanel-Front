import React from "react";

const RazorpayButton = () => {
  const handlePayment = async () => {
    try {
      // Call your backend to create an order
      const response = await fetch("http://localhost:7000/payment/createorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 5000 }), // Amount in smallest currency unit (e.g., paisa for INR)
      });
      const order = await response.json();

      if (!order || !order.id) {
        alert("Failed to create Razorpay order");
        return;
      }

      // Razorpay options
      const options = {
        key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
        amount: order.amount,
        currency: "INR",
        name: "Your App Name",
        description: "Test Transaction",
        image: "https://your-logo-url/logo.png", // Optional company logo
        order_id: order.id,
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          // Verify payment on the backend
          fetch("http://localhost:7000/payment/verifypayment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                alert("Payment verified successfully!");
              } else {
                alert("Payment verification failed!");
              }
            });
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during payment");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Razorpay Payment</h1>
        <p className="text-gray-600 mb-6">Click below to make a payment using Razorpay.</p>
        <button
          onClick={handlePayment}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:scale-105 transition transform duration-300"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default RazorpayButton;
