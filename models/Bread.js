const { Schema, model } = require("mongoose");

const BreadSchema = new Schema({
	type: {
		type: String,
		require: true
	},
	amount: {
		type: Number,
		default: 0,
		immutable: true,

	},
	expiration_date: {
		type: String,
		default: "unlimited",
		immutable: true,
	}
}, { timestamps: true });

const BreadModel = model("Bread", BreadSchema);
module.exports = BreadModel;