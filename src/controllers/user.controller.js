/*import { response } from "express"*/
import pkg from 'express'
const { response } = pkg

import userModel from "../models/user.model.js"


const createUser = async (req, res) => {
    const user = new userModel({
        username: req.body.username,
        password: req.body.password
    })

    try {
        const response = await user.save()
        res.status(201).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const response = await userModel.find()
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getUserByID = async (req, res) => {
    try {
        const response = await userModel.findById(req.params.userId)
        res.status(200).send(response)
    } catch (error){
        res.status(500).send({ 
            message: "Error, missing userID " + req.params.userId,
            error: error.message
        })
    }
}

const getUserByUsernameQuery = async (req, res) => {
    try {
        const response = await userModel.find({ username: req.query.username })
        response.length !== 0 
            ? res.status(200).send(response)
            : res.status(404).send({ message: "Missing username " + req.query.username })
    } catch(error) {
        res.status(500).send({
            message: "Error, missing username: " + req.query.username,
            error: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        if (!req.body) {return res.status(400).send({
            message: "Can not update empty values"
        })}
        const response = await userModel.findByIdAndUpdate(req.params.userId, {
            username: req.body.username,
            password: req.body.password
        }, { new: true })
        res.status(200).send(response)
    } catch(error) {
        res.status(500).send({
                message: "Update Error with ID: " + req.params.userId,
                error: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const response = await userModel.findByIdAndDelete(req.params.userId)
        res.status(200).send({ 
            message: "Successfully delete user: " + response.username 
            + " andID: " + req.params.userId
        })
    } catch (error) {
        res.status(500).send({
            message: "Error deleting ID: " + req.params.userId,
            error: error.message
        })
    }
}


export default {
    createUser,
    getAllUsers,
    getUserByID,
    getUserByUsernameQuery,
    updateUser,
    deleteUser
}
