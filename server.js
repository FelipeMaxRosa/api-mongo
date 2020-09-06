const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { MONGO_URI } = require("./database/config");
const app = express();
dotenv.config();

// Routes
const clientsRoutes = require("./routes/api/clients");

// BodyParser Middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Client API, access /client to more details",
  });
});

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(`Error to connected: ${err.message}`));

// Use Routes
app.use("/api/clients", clientsRoutes);

app.listen(PORT, () => {
  console.log(`Server run at port ${PORT}`);
});
