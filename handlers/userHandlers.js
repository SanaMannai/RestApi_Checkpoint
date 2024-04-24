const User = require("../Models/User");

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Create a new user

async function createUser(req, res, next) {
    
}

// Update a user by ID

async function updateUser(req, res, next) {
    
}

// Delete a user by ID

async function deleteUser(req, res, next) {
    
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};
