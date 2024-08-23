import orderModel from "../models/orderModal.js";
import userModal from "../models/userModel.js";

// Placing order from frontend
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      payment: true,
    });
    await newOrder.save();
    await userModal.findByIdAndUpdate(req.body.userId, { cartData: {} });
    res.json({ success: true, message: "Payment Successful" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in Payment" });
  }
};

// Fetch user orders
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, userOrders };
