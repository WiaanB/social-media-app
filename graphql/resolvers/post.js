const { AuthenticationError } = require('apollo-server')
const Post = require('../../models/Post')
const checkAuth = require('../../util/check-auth')

module.exports = {
    Query: {
        // Get all posts
        async getPosts() {
            try {
                const posts = await Post.find().sort({ createdAt: -1 })
                return posts
            } catch (error) {
                throw new Error(error)
            }
        },
        // Get single post
        async getPost(_, { postId }) {
            try {
                const post = await Post.findById(postId)

                if (post) {
                    return post
                } else {
                    throw new Error('that post isn\'t in here')
                }
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    Mutation: {
        // Creating a new post
        async createPost(_, { body }, context) {
            const user = checkAuth(context)

            const newPost = new Post({
                body,
                user: user.indexOf,
                username: user.username,
                createdAt: new Date().toISOString()
            })

            const post = await newPost.save()

            return post
        },

        // Deleting a post
        async deletePost(_, { postId }, context) {
            const user = checkAuth(context)
            // Can only be deleted by owner
            try {
                const post = await Post.findById(postId)
                if (user.username === post.username) {
                    await post.delete()
                    return 'bye bye post'
                } else {
                    throw new AuthenticationError('this post ain\'t yours')
                }
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}