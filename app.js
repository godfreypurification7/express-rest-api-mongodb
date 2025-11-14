const express = require('express');
const cors = require('cors');
const userRouter = require("./routes/users.routes");
require("./config/db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
// api/users: get
// api/users/ post
// api/users/:id put
// api/users/:id patch
// api/users/:id delete
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
    res.status(404).json({ message: "Route Not Found" });
});
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something went wrong"
    });
});
app.use(cors())
module.exports = app;