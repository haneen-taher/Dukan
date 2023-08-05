const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const vendorSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
      },
      message:
        "Password must be at least 8 characters with uppercase and lowercase letters",
    },
  },
  storeName: { type: String, required: true },
  address: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }],
});

// hashing the password
// pre('save') -> it will perform between the moment we getting data and the moment save data in dataBase
vendorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// create instance method -> it will be available on all document in the collection
vendorSchema.methods.correctPassword = async function (
  candidatePassword,
  vendorPassword
) {
  return await bcrypt.compare(candidatePassword, vendorPassword);
};

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
