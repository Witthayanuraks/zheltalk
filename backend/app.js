const express = require("express");
const indexRouter = require("./routes/index"); // Pastikan path relatifnya benar

const app = express();
const port = 1212;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cek dulu, siapatau gajalan :cat:");
});

// Gunakan router
app.use("/", indexRouter);

// Jalankan server
app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});
