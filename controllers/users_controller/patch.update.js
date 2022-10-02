const fs = require('fs');
const uniqid = require('uniqid');

module.exports.updateAUser = async (req, res) => {
	// get data from body
	const { gender, name, contact, address, photoUrl } = req.body;
	const { id } = req.params;
	await fs.readFile('users.json', 'utf-8', async (err, data) => {
		if (err) {
			console.log(err, 'can not read data');
		} else {
			// parse all user
			const parsed = await JSON.parse(data);
			// filter users
			const filteredUsers = await parsed.filter(items => items.id !== id);
			// find user with id
			const foundUser = await parsed.find(user => user.id === id);
			// add id
			foundUser.gender = gender;
			foundUser.name = name;
			foundUser.contact = contact;
			foundUser.address = address;
			foundUser.photoUrl = photoUrl;

			filteredUsers.push(foundUser);
			const stringified = await JSON.stringify(filteredUsers, null, 2);

			// update user in users.json file
			await fs.writeFile('users.json', stringified, err => {
				if (err) {
					console.log(err);
					res.send('sorry! could not post data');
				} else {
					res.send('Data post success');
				}
			});
			res.send(foundUser);
		}
	});
};
