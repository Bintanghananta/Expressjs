const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, "silakan isi nama"],
    unique: true,
  },
  email: {
    type: String,
    requied: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "silakan isi email valid"],
  },
});
module.exports = mongoose.model("User", UserSchema);
