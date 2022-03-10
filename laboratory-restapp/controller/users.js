const userModel = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
SECRET_KEY = 'TECHNOELEVATE'
const register = async (req, res, next) => {
    let { fname, email, password, role } = req.body;
    try {
        const emailExists = await userModel.findOne({ email: email })
        if (emailExists) {
            res.status(400).json({
                error: true,
                message: "email already exists",
                data: null
            })
        } else {
            const saltrounds = 10
            //salt password
            const salt = await bcrypt.genSalt(saltrounds)
            //hash password
            const hashedPassword = await bcrypt.hash(password, salt)
            await userModel.insertMany([
                {
                    fname,
                    email,
                    role,
                    password: hashedPassword
                }
            ])
            res.status(200).json({
                error: false,
                message: 'registration successfull',
                data: null
            })
        }

    }
    catch (err) {
        next(err)
    }
}
//login logic
const login = async (req, res, next) => {
    let { email, password } = req.body
    try {
        console.log(email, password);
        const userData = await userModel.findOne({ email }).lean()
        if (userData) {
            let { fname, role } = userData
            const isPasswordMatch = await bcrypt.compare(password, userData.password)
            console.log(isPasswordMatch, "-------------match")
            if (isPasswordMatch) {
                const payload = { fname, role };
                const token = await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: "5h"
                })
                res.status(200).json({
                    error: false,
                    message: "login successfull",
                    data: {
                        fname,
                        role,
                        token
                    }
                })

            } else {
                res.status(401).json({
                    error: true,
                    message: "Invalid Password",
                    data: null
                })
            }
        }
        else {
            res.status(400).json({
                error: true,
                message: "User not registered",
                data: null
            })
        }
    } catch (err) {
        next(err);
    }
}
//get the users details
const getAllusers = async (req, res, next) => {
    try {
        const usersData = await userModel.find().lean();
        res.json({
            error: false,
            message: "",
            data: usersData
        })
    } catch (err) {
        next(err)
    }

}
//editing users data
const editUser = async (req, res, next) => {
    try {
        let { _id, fname, email, role } = req.body;
        await userModel.updateOne(
            { _id }, {
            $set: {
                fname,
                email,
                role
            }
        }
        )
        res.json(
            {
                error: false,
                message: "data has been updated successfully",
                data: null
            }
        )

    } catch (err) {
        next(err)
    }

}
module.exports = {
    register,
    login,
    getAllusers,
    editUser
}