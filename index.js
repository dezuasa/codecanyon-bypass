const express = require("express");
const app = express();

// Middleware untuk memeriksa kode pembelian
function cekKodePembelian(req, res, next) {
  const purchaseCode = req.query.purchase_code;

  if (purchaseCode === "iki_kodeku") {
    next(); // Lanjutkan ke rute berikutnya jika kode pembelian benar
  } else {
    res.status(401).send("Ora Iso Cok!"); // Kode pembelian tidak valid
  }
}

app.get("/", cekKodePembelian, (req, res) => {
  // Hanya akan mencapai sini jika parameter valid
  res.send("Regular");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server mendengarkan pada port ${port}`);
});
