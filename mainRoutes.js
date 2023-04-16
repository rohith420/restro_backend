module.exports = app => {
    app.use("/restro", require("./outletModel/routes/index"))
    // app.use("/whatsapp", require("./Connection/Routes/index"))
  };