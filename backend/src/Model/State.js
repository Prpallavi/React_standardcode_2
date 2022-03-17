const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StatesSchema = new Schema(
  {
      states: String,
      country_id:{ type: Schema.Types.ObjectId, ref: "country" }

 
  },
);
module.exports =States = mongoose.model("states",StatesSchema);