const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.afxso0w.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`connected`);
  })
  .catch((err) => {
    console.log(err);
  });
