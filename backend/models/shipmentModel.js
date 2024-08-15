const mongoose = require("mongoose");

const ShipmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    OrderID: {
      type: String,
      required: [true, "Please add an order ID"],
      trim: true, 
    },
    
    Ordername: {
      type: String,
      required: [true, "Please add ordername"],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, "Please add a quantity"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Shipment = mongoose.model("Products", ShipmentSchema);
module.exports = Shipment;
