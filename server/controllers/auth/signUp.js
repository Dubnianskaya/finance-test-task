const {Conflict} = require('http-errors')
const bcrypt = require('bcryptjs')

const {User} = require('../../models')

const signUp = async (req, res) => {
    const {email, password, favorite} = req.body;
    const user = await User.findOne({email})
    if(user) {
        throw new Conflict("Email in use")
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    await User.create({email, password: hashPassword, favorite});
    res.status(201).json({
    status: "success",
    code: 201,
    data: {
        user: {
            email,
            favorite
        }
    }
    })
  }

module.exports = signUp