const express = require('express');
const { deleteAUser } = require('../controllers/users_controller/delete.user');
const { getAllUser } = require('../controllers/users_controller/get.all');
const { getRandomUser } = require('../controllers/users_controller/get.random');
const { updateAUser } = require('../controllers/users_controller/patch.update');
const { saveAUser } = require('../controllers/users_controller/post.save');

const router = express.Router();

/**
 * * GET /user/random A random user
 * TODO:Get a random user from the .json file
 */
router.route('/random').get(getRandomUser);

/**
 * * GET /user/all A list of random users
 * TODO: Get all the users from the .json file
 * TODO: BONUS: Limit the number of users using query parameter(s)
 */
router.route('/all').get(getAllUser);

/**
 * *POST  /user/save Save a random user
 * TODO: Save a user in the .json file
 * ? BONUS: validate the body and check if all the required properties are present in the body.
 */
router.route('/save').post(saveAUser);

/**
 * // PATCH /user/update Update a random user
 * //TODO: Update a user's information in the .json file using its id
 * ? BONUS: validate the user id
 */
router.route('/update/:id').patch(updateAUser)

/**
 * // DELETE /user/ delete
 * //TODO: Delete a user from the .json file using its id
 * ? BONUS: validate the user id
 */
router.route('/delete/:id').delete(deleteAUser)

module.exports = router;
