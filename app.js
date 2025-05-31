const express = require("express");
const bookRoute = require("./routes/bookRoute")
const app = express();
const cors = require("cors")
require("./database/connection")
const {multer, storage} = require("./middleware/multerConfig")
const upload = multer({ storage: storage })

app.use(express.json()) // for parsing application/json
app.use(cors({
  origin: "*"
})) // Enable CORS for all routes
app.use("/api/",bookRoute)
app.post("/api/upload", upload.single("bookImage"), function (req, res) {
  // console.log(req.file)
  res.json({
    message: "File uploaded successfully",
    // file: req.file
  })
});


app.listen(3000, function () {
  console.log("server/backend/node project has started at port 3000");
});
