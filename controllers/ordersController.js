const OrdersModel = require("../models/Orders");
const UserModel = require("../models/Users");

const createOrder = async (req, res) => {
  const { userId, orderDetails } = req.body;

  try {
    const currentUser = await UserModel.findById(userId);

    if (!currentUser) {
      return res.status(400).send("User not found");
    }

    // TODO: jwt user authentication

    const order = new OrdersModel({
      userId,
      orderDetails
    })

    await order.save();

    res.status(200).json({ message: 'order created successfully' });
  } catch (e) {
    return res.status(500).send("Something went wrong");
  }
};

module.exports = {
  createOrder
}