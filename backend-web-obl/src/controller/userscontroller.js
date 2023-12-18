const UsersModel = require('../models/document');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
    res.json({
        message: 'GET all users success',
        data: data
    })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUsers = async (req, res) => {
    const {body} = req;
    try {
        await UsersModel.createNewUsers(body);
        res.json({
            message: 'CREATE new users success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}

const updateUser = async (req,res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, id);
        res.json({
            message: 'UPDATE users success',
            data: {
                id: id,
                body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.deleteUser(id);
        res.json({
            message: 'DELETE success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser
}