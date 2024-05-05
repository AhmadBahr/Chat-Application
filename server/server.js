const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const { connectToMongoDB } = require("./config");
const { userRoutes, chatRoutes, messageRoutes } = require("./routes");
const { notFound, errorHandler } = require("./middleware");

const app = express(); // Use express js in our app
app.use(express.json()); // Accept JSON data
dotenv.config({ path: path.join(__dirname, "./.env") }); // Specify a custom path if your file containing environment variables is located elsewhere
connectToMongoDB(); // Connect to Database

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

