import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
    username: Boolean
});

module.exports = mongoose.model("Sensor", userSchema)