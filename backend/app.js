const express = require("express");
const morgan = require("morgan");
const vendorRouter = require("./routers/vendorsRouter");
const productRouter = require("./routers/productsRouter");
const CustomerRouter = require("./routers/customerRouter");
const loginRouter = require("./routers/customerRouter");
const app = express();

// create middleware -> responsible for get the req body data
app.use(express.json());
app.use(morgan("dev"));

// mounting process
app.use("/api/v1/vendors", vendorRouter);
app.use("/api/v1/Products", productRouter);
app.use("/api/v1/customer", CustomerRouter);

module.exports = app;
