const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
let ejs = require('ejs');


// regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const morgan = require("morgan")


// temp check for ejs
app.set("view engine", "ejs")

//morgan middleware
app.use(morgan('tiny'))


// cookies and file middleware
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir : "/tmp/"
}))


// import all routes here
const home = require("./routes/home")
const user = require("./routes/user")

// router middleware
app.use("/api/v1", home)
app.use("/api/v1", user)


app.get("/signuptest", (req, res) => {
    res.render("signuptest")
    // res.send("ejs")
})
// export app.js
module.exports = app;