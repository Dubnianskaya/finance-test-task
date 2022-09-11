const {Schema, model} = require('mongoose')
const Joi = require('joi')

const userSchema = Schema({
        password: {
          type: String,
          required: [true, 'Password is required'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        favorite: {
          type: Array,
          default: [],
        },
        token: {
          type: String,
          default: null,
        },

}, {versionKey: false, timestamps: true})

const joiRegisterSchema = Joi.object({
    password: Joi.string().required().min(6),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'uk', 'ca', 'org'] } }),
})

const joiLoginSchema = Joi.object({
  password: Joi.string().required().min(6),
  email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'uk', 'ca', 'org'] } })
})

const joiFavoriteSchema = Joi.object({
  favorite: Joi.array().items(Joi.number())
})

const User = model("user", userSchema)

module.exports = {
    User,
    joiRegisterSchema,
    joiLoginSchema,
    joiFavoriteSchema
}