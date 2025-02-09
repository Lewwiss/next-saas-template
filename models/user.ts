import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      private: true,
    },
    image: {
      type: String,
    },
    customerId: {
      type: String,
      validate(value: string) {
        return value.includes("cus_");
      },
    },
    priceId: {
      type: String,
      validate(value: string) {
        return value.includes("price_");
      },
    },
    pro: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
