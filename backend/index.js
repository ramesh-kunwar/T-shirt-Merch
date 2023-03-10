require("dotenv").config()
const app = require("./app");
const connectWithDb = require("./config/db");

const cloudinary = require("cloudinary")

// connect with database
connectWithDb()


// cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server is running at ${PORT}...`))