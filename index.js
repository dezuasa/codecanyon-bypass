const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const queryObject = req.query;

  if (queryObject.purchase_code) {
    const purchaseCode = queryObject.purchase_code;
    res.send("Regular");
  } else {
    res.status(404).send("Tidak Ditemukan");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server mendengarkan pada port ${port}`);
});
