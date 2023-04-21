const { Schema, model } = require("mongoose");

const DogSchema = new Schema({
	bread: {
		type: String,
		require: true
	},
	age: {
		type: Number,
	}
}, { timestamps: true });

const dogModel = model("dogs", DogSchema);

module.exports = dogModel;