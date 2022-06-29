const Joi = require("@hapi/joi");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const AdmenCollection = require("../models/adminSchema");

const resolvers = {
  Query: {
    async getVerify(_, __, { req }) {
      const token = req.headers["token"];
      if (token) {
        const decode = jwt.verify(token, "secret-key");
        if (decode) {
          const admen = await AdmenCollection.findById(decode.admenId);
          return admen;
        } else {
          throw new Error("you have to login as admen ");
        }
      }
    },
  },
  Mutation: {
    async loginAdmen(_, { email, password }, { req }) {
      const admen = await AdmenCollection.findOne({ email: email });
      if (!admen) {
        throw new Error("you have to ask for access");
      }
      const isMatch = await bcrypt.compare(password, admen.password);
      if (!isMatch) {
        throw new Error("Password is incorrect");
      }
      const token = jwt.sign(
        {
          admenId: admen.id,
          email: admen.email,
          name: "admen",
        },
        "secret-key",
        { expiresIn: "2h" }
      );
      return { token: token, tokenExpiration: 2, admen: admen };
    },
  },
};
module.exports = { resolvers };
