const cookeiToken = (user, res)=>{
    const token = user.getJWTToken()

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_TIME * 24 * 60 * 60 * 1000, // for 3 days
        ),
        httpOnly: true,
    }
    user.password = undefined
    res.status(200).cookie("token", token, options).json({
        success: true,
        token, 
        user,
    })

}

module.exports  = cookeiToken;