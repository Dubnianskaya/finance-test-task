const {Unauthorized} = require('http-errors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {User} = require('../../models')
const {SECRET_KEY} = process.env

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user || !(bcrypt.compareSync(password, user.password))) {
        throw new Unauthorized("Email or password is wrong")
    }

    const payload = {
        id: user._id
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "5h"})
    await User.findByIdAndUpdate(user._id, {token})
    res.json({
    status: "success",
    code: 200,
    data: {
        token,
        user: {
            email,
            favorite: user.favorite
        }
    }
    })
  }

module.exports = login