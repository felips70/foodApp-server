const mongoose = require("mongoose");

const OrdersModel = mongoose.model("orders", {
  userId: { type: mongoose.ObjectId, required: true },
  orderDetails: { type: [{ dishId: mongoose.ObjectId, quantity: Number, _id: false }], required: true },
});

module.exports = OrdersModel;