const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')

const User = require('../../models/User')
const { validateRegisterInput, validateLoginInput } = require('../../util/validators')

// Helper function to create a token
function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
}

module.exports = {
    Mutation: {
        // Logic for logging a user in
        async login(_,{ username, password }) {
            const { errors, valid } = validateLoginInput(username, password)

            if (!valid) {
                throw new UserInputError('errors', { errors })
            }

            // Ensuring that user exists
            const user = await User.findOne({ username })
            if (!user) {
                errors.general = 'that user isn\'t in our database tho'
                throw new UserInputError('you don\'t exist here lol', { errors })
            }
            // Checking if the password is correct
            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                errors.general = 'your password doesn\'t add up, dude'
                throw new UserInputError('wrong creds', { errors })
            }

            const token = generateToken(user)
            // Returning the data
            return {
                ...user._doc,
                id: user._id,
                token
            }
        },
        // Logic to register a new user
        async register(_, { registerInput: { username, email, password, confirmPassword } }, context, info) {
            // Validation for the user input
            const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword)

            if (!valid) {
                throw new UserInputError('errors', { errors })
            }

            // Making sure that user doesn't already exist
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
            const token = generateToken(res)

            // Return the data
            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}