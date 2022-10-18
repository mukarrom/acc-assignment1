const express = require('express');
const cors = require('cors');
require('dotenv').config();
const usersRoutes = require('./routes/users.route')

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/user', usersRoutes)


app.get('/', (req, res) => {
	res.send('Server is running');
});
app.get('*', (req, res) => {
	res.send('404 api not found!');
});
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
