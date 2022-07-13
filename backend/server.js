const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const { resolvers } = require("./graphql/resolvers");
const { typeDefs } = require("./graphql/typeDefs");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
const { DB_USER, DB_PASS, DB_HOST, DB_NAME, PORT } = process.env;

const mongoURL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(mongoURL)
  .then(() => console.log("successfully connect to the database Atlas"))
  .catch((err) => console.log(`error connecting to the database Atlas ${err}`));
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (context) => {
    return context;
  },
  cors: true,
});
server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen(PORT, () =>
    console.log(`🚀 apolloServer Server ready at  ${PORT}`)
  );
});
