const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
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
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
      },
      message:
        'Password must be at least 8 characters with uppercase and lowercase letters',
    },
  },
  orders: [],
})

// hashing the password
// pre('save') -> it will perform between the moment we getting data and the moment save data in dataBase
// customerSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// create instance method -> it will be available on all document in the collection
// customerSchema.methods.correctPassword = async function (
//   candidatePassword,
//   customerPassword
// ) {
//   return await bcrypt.compare(candidatePassword, customerPassword);
// };

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
