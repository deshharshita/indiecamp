var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: String,
    email: {type: String, required: true, unique: true},
    isAdmin: {type: Boolean, default: false},
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);