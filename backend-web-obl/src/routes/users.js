const express = require('express');


const UsersController = require('../controller/userscontroller')

const router = express.Router();

//CREATE-POST
router.post('/', UsersController.createNewUsers);
//READ-GET
router.get('/', UsersController.getAllUsers);
//UPDATE-PATCH
router.patch('/:id', UsersController.updateUser);
//DELETE-DELETE
router.delete('/:id', UsersController.deleteUser)

module.exports = router; 