const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        client: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'client'
        },
        orderItems: [
            {
              name: { type: String, required: true },
              qty: { type: Number, required: true },
              price: { type: Number, required: true },
              product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'product',
              },
            },
          ],
          shippingAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            appartment: {type: Number, required: true},
          },
          paymentMethod: {
            creditCard: { type: Number, required: true },
            ID: { type: Number, required: true },
            expiredDate: { type: Date, required: true },
            CVV: {type: Number, required: true},
          },
          totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
          },
          status: {
            type: String,
            required: true,
            default: "Pending...",
          },
          paidAt: {
            type: Date,
          },
          isDelivered: {
            type: Boolean,
            required: true,
            default: false,
          },
          deliveredAt: {
            type: Date,
          },
    }
);

module.exports = mongoose.model('order', orderSchema);