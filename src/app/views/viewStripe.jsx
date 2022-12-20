import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import checkOutForm from "./checkOutForm";
import "./App.css";


const stripePromise = loadStripe("pk_test_51MEBY7DW8mMJ2oLXOHmqJkkutrbprP1z0acBR5LTmdJqDpj8IoWfi9T1A9F7JZD8Vogayg9D0U68Z3fK9dYnQhsD00oBraJBfu");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
 
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <checkOutForm />
        </Elements>
      )}
    </div>
  );
}

