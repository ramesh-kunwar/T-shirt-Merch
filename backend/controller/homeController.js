const BigPromise = require("../middleware/bigPromise")
exports.home = BigPromise(async (req, res) => {
    // const db = await something()
    res.send("Welcome to express app")
})
