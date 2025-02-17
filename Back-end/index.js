import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Added to parse JSON requests

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true, // Deprecated
  useUnifiedTopology: true, // Deprecated
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error", error));

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
