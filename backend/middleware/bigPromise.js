// try catch and async - await || use promise
module.exports = func => (req, res, next)=>
    Promise.resolve(req, res, next).catch(next)