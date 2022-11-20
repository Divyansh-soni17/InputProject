import mongoose from "mongoose";
 
const { Schema } = mongoose;

const dataschema = new Schema({
    dataarray:{
        type:[String]
     }
});

const dataModel = mongoose.model("countData", dataschema);
export default dataModel;
