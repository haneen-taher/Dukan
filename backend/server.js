const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const app = require("./app");

// connect database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connect database successful ...."))
  .catch((err) => {
    console.log("ERROR💣", err);
  });

// listen server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on ${port} .....`);
});
