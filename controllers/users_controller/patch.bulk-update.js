const fs = require('fs');
// const uniqid = require('uniqid');

module.exports.bulkUpdate = (req, res) => {
	const allId = JSON.parse(req.params.id); // object
	const newData = req.body; // object
	fs.readFile('users.json', 'utf-8', (error, data) => {
		if (error) {
			res.send({ message: 'Can not read file. something went wrong', error });
		} else {
			const pData = JSON.parse(data); // object

			// users not matches with ids
			const filteredUsers = pData.filter(e => !allId.includes(e.id));

			// users matches with ids
			let filteredData = pData.filter(e => allId.includes(e.id)); // object
			filteredData.map(e => (e.address = newData.address));

			// push updated users in filtered users
			filteredData.map(e => filteredUsers.push(e));

			const stringified = JSON.stringify(filteredUsers, null, 2);

            // res.send(stringified)
            // update user in users.json file
			fs.writeFile('users.json', stringified, err => {
				if (err) {
					console.log(err);
					res.send('sorry! could not post data');
				} else {
					res.send('Data post success');
				}
			});
			// res.send(foundUser);
		}
	});
};
