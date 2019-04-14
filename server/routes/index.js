import uphold from "../uphold-sdk";
const express = require("express");
const router = express.Router();
const contactsRoutes = require("./contacts");
const transactionsRoutes = require("./transactions");
const cardsRoutes = require("./cards");

const UPHOLD_LOGIN_URL =
  "https://sandbox.uphold.com/authorize/960e78e5c052c35f465f60864fe0db42f01bd08c?scope=accounts:read%20cards:read%20cards:write%20contacts:read%20contacts:write%20phones:read%20phones:write%20transactions:deposit%20transactions:read%20transactions:transfer:application%20transactions:transfer:others%20transactions:transfer:self%20transactions:withdraw%20transactions:commit:otp%20user:read";
const UPHOLD_STATE = "sdf234khj234o23498hsdf923";

router.get("/login", (req, res) => {
  console.log("LOGIN");
  res.redirect(`${UPHOLD_LOGIN_URL}&state=${UPHOLD_STATE}`);
});
router.get("/uphold/callback", async (req, res) => {
  const { code, state } = req.query;

  const credentials = await uphold.authorize(code);

  if (credentials && credentials.access_token) {
    res.redirect(
      `http://localhost:3000/home?token=${credentials.access_token}`
    );
  } else {
    res.json({ error: true, errorMessage: "Error getting access-token" });
  }
});

router.get("/", (req, res) => res.send("Hellow World!"));
router.use("/transactions", transactionsRoutes);
router.use("/contacts", contactsRoutes);
router.use("/cards", cardsRoutes);

module.exports = router;
