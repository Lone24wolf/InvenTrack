const asyncHandler = require("express-async-handler");
const Shipment = require("../models/shipmentModel");

const createShipment = asyncHandler(async (req, res) => {
    const {orderId ,orderName ,quantity } = req.body;
  
    //   Validation
    if (!orderId || !orderName || !quantity ) {
      res.status(400);
      throw new Error("Please fill in all fields");
    } 
  
    // Create Shipment
    const shipment = await Shipment.create({
      user: req.user.id,
      orderId,
      orderName,
      quantity
    });
  
    res.status(201).json(shipment);
  });
