const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const dbDataSchema = new Schema({
    character: String,
    tvShow: String,
    persType: String, 
    
}); 

const dbData = mongoose.model("dbData", dbDataSchema);
module.exports = dbData;