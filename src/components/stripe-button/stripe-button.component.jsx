import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_gsRzALq8iDSmZPBmcmwPrweI002EKBcBrA";

  const onToken = token => {
    console.log("StripeCheckoutButton -> token", token);

    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      ammount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
