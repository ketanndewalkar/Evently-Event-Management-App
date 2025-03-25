const mongoose = require("mongoose");

const mongoose_connect = () => {
    mongoose.connect("mongodb+srv://dewalkarketan123:Ketan%4012345@cluster0.rjd4a.mongodb.net/Ketan?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("mongoose is connected"))
    .catch((err)=>console.log(err));
}

module.exports = mongoose_connect;