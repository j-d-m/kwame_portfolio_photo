const Joi = require("@hapi/joi");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const AdminCollection = require("../models/adminSchema");

const resolvers = {
  Query: {
    async getVerify(_, __, { req }) {
      const token = req.headers["token"];
      if (token) {
        const decode = jwt.verify(token, "secret-key");
        if (decode) {
          const admin = await AdminCollection.findById(decode.adminId);
          return admin;
        } else {
          throw new Error("you have to login as admin ");
        }
      }
    },
  },
  Mutation: {
    async loginAdmin(_, { email, password }, { req }) {
      const admin = await AdminCollection.findOne({ email: email });
      if (!admin) {
        throw new Error("you have to ask for access");
      }
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        throw new Error("Password is incorrect");
      }
      const token = jwt.sign(
        {
          admenId: admin.id,
          email: admin.email,
          name: "admin",
        },
        "secret-key",
        { expiresIn: "2h" }
      );
      return { token: token, tokenExpiration: 2, admin: admin };
    },
  },
};
module.exports = { resolvers };
