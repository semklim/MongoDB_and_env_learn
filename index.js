// roman;
// 2009996Ro;

const mongoose = require("mongoose");
const BreadModel = require("./models/Bread");

const DB_CONNECTION = 'mongodb+srv://roman:200996Ro@cluster0.wkyxlnu.mongodb.net/Meal?retryWrites=true&w=majority';

function setExpirationDay (days) {
	return new Date(new Date().setUTCDate(new Date().getUTCDate() + days)).toUTCString();
}

const connection = async () => {
	console.log('Start');
	try {
		await mongoose.connect(DB_CONNECTION);
		console.log("connected");

		const rey = new BreadModel({
			type: 'Rey',
			amount: 10,
			expiration_date: setExpirationDay(20)
		});
		await rey.save();

		const wheat = new BreadModel({
			type: 'Wheat',
			amount: 5,
			expiration_date: setExpirationDay(20)
		});
		await wheat.save();
		console.log('U save');
	} catch (err) {
		console.log(err);
	}
};

connection();