const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  first_name: { type: "string", required: true },
  last_name: { type: "string", required: true },
  email: { type: "string", required: true },
  password: { type: "string", required: true },

  //   this is reference to photo schema
  // photoList: [{ type: mongoose.Schema.Types.ObjectId, ref: "photoLists" }],
});
const adminCollection = mongoose.model("Admen", adminSchema);
module.exports = adminCollection;

// when we create photo schema we have to reference to user like this : createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },

// remember to make add admin resolver and change it in front end
