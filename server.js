const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Routes
const clientsRoutes = require("./routes/api/clients");
const usersRoutes = require("./routes/api/users");

// BodyParser and Cors Middleware
app.use(cors());
app.use(express.json());

const { PORT, MONGO_URI } = process.env;

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
app.use("/api/users", usersRoutes);

// Listen Port
app.listen(PORT, () => {
  console.log(`Server run at port ${PORT}`);
});
