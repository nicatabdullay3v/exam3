const monogoose = require('mongoose')
const dbConnect = () =>{
    try {
        monogoose.connect("mongodb+srv://nicatneon:nicat@cluster0.3zht3.mongodb.net/?retryWrites=true&w=majority").then(()=>{
            console.log("Connected");
        })
    } catch (err) {
        console.log("error",err);
    }
}
module.exports = dbConnect