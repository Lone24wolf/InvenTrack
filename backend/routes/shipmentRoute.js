const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const createShipment=require("../controllers/shipmentController")

router.post("/", protect, createShipment);


module.exports = router;
