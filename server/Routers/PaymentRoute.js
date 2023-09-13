const express = require("express");
require("dotenv").config();
const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();
// PaymentRoute.js
router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      // change the line_items to the products in the cart
      // Construct the line_items array based on the cart data
      // const line_items = data.cart.map((item) => {
      //   return {
      //     price_data: {
      //       currency: "usd",
      //       product_data: {
      //         name: item.name,
      //         images: [item.image],
      //         metadata: { id: item.id },
      //       },
      //       unit_amount: item.price * 100,
      //     },
      //     quantity: item.quantity,
      //   };
      // });

      //   Demo data

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "chicken",
              images: [
                "https://images.unsplash.com/photo-1569396327972-6231a5b05ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              ],
              metadata: { id: "product1" },
            },
            unit_amount: 1999, // Amount in cents (e.g., $19.99)
          },
          quantity: 2,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-sucess`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
