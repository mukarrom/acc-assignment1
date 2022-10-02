const fs = require('fs');

module.exports.getRandomUser = async (req, res) => {
	await fs.readFile('users.json', 'utf-8', async (err, data) => {
		if (err) {
			console.log(err, 'can not read data');
		} else {
			const parsed = await JSON.parse(data);
			const length = await parsed.length;
			const random = await Math.floor(Math.random() * length);
			console.log(random);
			res.send(parsed[random]);
		}
	});
};
