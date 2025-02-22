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
    priceIds: {
      type: [String],
      validate(value: string[]) {
        return value.every((val) => val.includes("price_"));
      },
    },
    tokens: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
