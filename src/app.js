const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const { userRoutes, authRoutes, ordersRoutes } = require("./routes");
const transporter = require("./utils/mailer");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("succesfull authentication"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("sync database"))
  .catch((error) => console.log(error));

transporter
  .verify() 
  .then(() =>
    console.log("we are ready to send emails ")
  );

app.get("/", (req, res) => {
  console.log("welcome to server");
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", ordersRoutes);

app.use(handleError);

module.exports = app;
