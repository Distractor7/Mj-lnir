// Requiring Mongoose
const mongoose = require("mongoose");

// User schema
const userSchema = new mongoose.Schema({
  // Details of user.
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["artist", "manager"], required: true },
  // Tokens array stores tokens for authentication.
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Exporting User model.
module.exports = mongoose.model("User", userSchema);
