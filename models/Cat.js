const { Schema, model } = require("mongoose");

const catSchema = new Schema({
	bread: {
		type: String,
		require: true
	},
	age: {
		type: Number,
		default: 0,
		immutable: true,

	}
}, { timestamps: true });

const CatModel = model("Cats", catSchema);

module.exports = CatModel;