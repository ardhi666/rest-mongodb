const User = require('../../models/User')

exports.getUsers = async (req, res) => {
    try {
        const result = await User.find()

        res.status(200).send({
            result
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const result = await User.findById(req.params.id)

        res.status(200).send({
            result
        })
    } catch (error) {
        res.status(404).send({
            error
        })
    }
}

exports.register = async (req, res) => {
    try {
        const data = new User(req.body)
        const result = await data.save()

        res.status(201).send({
            result
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        await User.updateOne({_id:req.params.id}, {$set: req.body})

        res.status(200).send({
            status:"success"
        })

    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({_id:req.params.id})

        res.status(200).send({
            status:"success"
        })

    } catch (error) {
        res.status(500).send({
            error
        })
    }
}