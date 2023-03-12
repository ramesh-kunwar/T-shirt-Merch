const mongoose = require("mongoose")

const connectWithDb = () =>{

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedtopology: true,
    }).then(console.log(`DB got connected`))
    .catch(error =>{
        console.log("Db connection nissue");
        console.log(error);
        process.exit(1)
    })

}

module.exports = connectWithDb