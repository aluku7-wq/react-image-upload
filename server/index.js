const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    let imagename = Date.now() + path.extname(file.originalname);
    cb(null, imagename);
  },
});
const upload = multer({ storage: storage });

app.post("/uploads", upload.single("picture"), (req, res) => {
  res.send("uploaded");
});

app.listen(3001, () => {
  console.log("app running on 3001");
});
