const BigPromise = require("../middleware/bigPromise")
exports.home = BigPromise(async (req, res) => {
    // const db = await something()
    res.send("Welcome to express app")
})
exports.register = (req, res) => {
    res.status(200).send("Register route")
}