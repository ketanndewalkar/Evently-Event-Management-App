const { default: mongoose } = require("mongoose");

const paymentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true }, // e.g., "Credit Card", "PayPal"
    status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("payment", paymentSchema);
