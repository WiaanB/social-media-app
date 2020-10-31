const jwt = require('jsonwebtoken')
const { AuthenticationError } = require('apollo-server')

module.exports = (context) => {
    // context = { ... headers }
    const authHeader = context.req.headers.authorization

    if (authHeader) {
        const token = authHeader.split("Bearer ")[1]

        if (token) {
            try {
                const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
                return user
            } catch (error) {
                throw new AuthenticationError('broken token lol')
            }
        }

        throw new Error('auth token must be \'Bearer [token]\'')
    }

    throw new Error('you need an auth header')
}