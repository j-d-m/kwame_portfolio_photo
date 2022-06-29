const mongoose = require("mongoose");
const { Schema } = mongoose;

const admenSchema = new Schema({
  email: { type: "string", required: true },
  password: { type: "string", required: true },
});
const admenCollection = mongoose.model("Admen", admenSchema);
module.exports = admenCollection;
