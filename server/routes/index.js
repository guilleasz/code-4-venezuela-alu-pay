const express = require("express");
const router = express.Router();
const transactionsRoutes = require("./transactions");
const axios = require("axios");

router.get("/login", (req, res) => {
  res.redirect(
    "https://sandbox.uphold.com/authorize/960e78e5c052c35f465f60864fe0db42f01bd08c?scope=accounts:read%20cards:read%20cards:write%20contacts:read%20contacts:write%20phones:read%20phones:write%20transactions:deposit%20transactions:read%20transactions:transfer:application%20transactions:transfer:others%20transactions:transfer:self%20transactions:withdraw%20transactions:commit:otp%20user:read&state=sdf234khj234o23498hsdf923"
  );
});
router.get("/uphold/callback", (req, res) => {});

router.get("/", (req, res) => res.send("Hellow World!"));
router.use("/transactions", transactionsRoutes);

router.get("/", (req, res) => res.send("Hellow World!"));

module.exports = router;
