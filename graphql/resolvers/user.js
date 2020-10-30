const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')

const User = require('../../models/User')

module.exports = {
    Mutation: {
        register: async (_, { registerInput: { username, email, password, confirmPassword } }, context, info) => {
            // TODO: Validate User Data
            const user = await User.findOne({ username })

            if (user) throw new UserInputError('username has already been registered, sorry', { errors: { username: 'username taken lol' } })

            // Hash the user password
            password = await bcrypt.hash(password, 12)
            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            })
            // Save the user
            const res = await newUser.save()

            // Create a JWT
            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })

            // Return the data
            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}