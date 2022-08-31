const express = require('express')
const router = express.Router()

// CONTROLLERS

const {getUsers, getUser, register,updateUser,deleteUser} = require('../controllers/user')

// ROUTE

router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/user', register)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)


module.exports = router