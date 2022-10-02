const fs = require('fs');

module.exports.getAllUser = async (req, res) => {
	await fs.readFile('users.json', 'utf-8', (err, data) => {
		if (err) {
			console.log(err, 'can not read data');
		} else {
			res.send(data);
		}
	});
};
