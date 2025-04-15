const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    transactionId: String,
    amount: String,
    payerName: String,
    payerUPI: String,
    status: String,
    date: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;