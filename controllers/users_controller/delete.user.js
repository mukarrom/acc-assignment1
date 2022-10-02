const fs = require('fs');
const uniqid = require('uniqid');

module.exports.deleteAUser = async (req, res) => {
	const { id } = req.params;
	await fs.readFile('users.json', 'utf-8', async (err, data) => {
		if (err) {
			console.log(err, 'can not read data');
		} else {
			// parse all user
			const parsed = await JSON.parse(data);
			// filter users
			const filteredUsers = await parsed.filter(items => items.id !== id);

			const stringified = await JSON.stringify(filteredUsers, null, 2);

			// delete from users.json file
			await fs.writeFile('users.json', stringified, err => {
				if (err) {
					console.log(err);
					res.send('sorry! could not post data');
				} else {
					res.send('Data post success');
				}
			});
			console.log('success');
			res.send(stringified);
		}
	});
};
