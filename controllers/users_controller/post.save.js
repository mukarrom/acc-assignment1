const fs = require('fs');
const uniqid = require('uniqid');

module.exports.saveAUser = async(req, res) => {
	// get data from body
	const { gender, name, contact, address, photoUrl } = req.body;
	// add id
	const userData = {
		id: uniqid(),
		gender,
		name,
		contact,
		address,
		photoUrl,
	};
	// read previous data from json
	fs.readFile('users.json', 'utf-8', (err, data) => {
		if (err) {
			console.log(err, 'can not read data');
		} else {
			let array = JSON.parse(data);
			array.push(userData);
			// console.log(typeof array);
			const stringified = JSON.stringify(array, null, 2);

			// post new data
			fs.writeFile('users.json', stringified, err => {
				if (err) {
					console.log(err);
					res.send('sorry! could not post data');
				} else {
					res.send('Data post success');
				}
			});
			// console.log(stringified);
			res.send({
				message: 'successfully posted user data',
				...userData,
			});
		}
	});
};
