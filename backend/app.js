const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")



// regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const morgan = require("morgan")

//morgan middleware
app.use(morgan('tiny'))


// cookies and file middleware
app.use(cookieParser())
app.use(fileUpload())


// import all routes here
const home = require("./routes/home")

// router middleware
app.use("/api/v1", home)

// export app.js
module.exports = app;