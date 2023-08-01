const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const agencySchema = new mongoose.Schema({
  publisher: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness on the username field
  }, email: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness on the username field
  },
  password: {
    type: String,
    required: true,
  }
});




agencySchema.pre('save' ,async function(next){
    try {
        if(!this.isModified('password')){
            return next;
        }
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
  });
//hashing the passowrd



const Agency = mongoose.model("Agencies", agencySchema);
module.exports = Agency;
