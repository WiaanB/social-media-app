import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import gql from 'graphql-tag'
import { useApolloClient, useMutation } from "@apollo/client"

import { useForm } from '../util/hooks'
import { FETCH_POSTS_QUERY } from '../util/graphql'

function PostForm() {
    const client = useApolloClient()

    const { values, onChange, onSubmit } = useForm(createPostCallback, {
        body: ''
    })

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        update(_, res) {
            const data = client.readQuery({
                query: FETCH_POSTS_QUERY
            })
            client.writeQuery({ query: FETCH_POSTS_QUERY, data: { getPosts: [res, ...data.getPosts] }})
            values.body = ''
        },
        onError(error) {
        }
    })

    function createPostCallback () {
        createPost()
    }

    return (
        <>
            <Form onSubmit={onSubmit} autoComplete="off">
                <h2>create a post:</h2>
                <Form.Field autoComplete={false}>
                    <Form.Input 
                        placeholder='what is on your mind???'
                        name='body'
                        onChange={onChange}
                        value={values.body}
                        error={error ? true:false}
                    />
                    <Button type='submit' color='teal'>
                        post
                    </Button>
                </Form.Field>
            </Form>
            {error && (
                <div className='ui error message' style={{marginBottom: 20 }}>
                    <ul className='list'>
                        <li>{error.graphQLErrors[0].message}</li>
                    </ul>
                </div>
            )}
        </>
    )
}


const CREATE_POST_MUTATION = gql `
    mutation createPost($body: String!) {
        createPost(body: $body) {
            id body createdAt username
            likes {
                id username createdAt
            }
            likeCount
            comments {
                id body username createdAt
            }
            commentCount
        }
    }
`

export default PostForm