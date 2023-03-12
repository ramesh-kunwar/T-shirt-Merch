const User = require("../models/user")
const BigPromise = require("../middleware/bigPromise")
const CustomError = require("../utils/customError");
const cookeiToken = require("../utils/cookieToken");
const fileUpload = require("express-fileupload")
const cloudinary = require("cloudinary")

exports.signup = BigPromise(async (req, res, next) => {
    if (!req.files) {
        return next(new CustomError("Photo is required", 400))

    }

    const { name, email, password } = req.body;

    if (!(email || name || password)) {
        return next(new CustomError("Name, email and password are required", 400))
    }

    let result;
    if (req.files) {
        let file = req.files.photo;
        result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: "users",
            width: 150,
            crop: "scale",
        })

    }



    const user = await User.create({
        name,
        email,
        password,
        photo: {
            id: result.public_id,
            secure_url: result.secure_url
        }
    })

    // we have to create jwt token again and again so we are creating a funciton in utiljs for cookeitoken
    cookeiToken(user, res)

})



