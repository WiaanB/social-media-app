import React, { useContext, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import { AuthContext } from '../context/auth'
import { useForm } from '../util/hooks'

function Login(props) {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: ''
    })

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        // callback if successful
        update(_, { data: { login: userData } }) {
            context.login(userData)
            props.history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        // Setting the variables to the state
        variables: values
    })

    function loginUserCallback() {
        loginUser()
    }

    return (
        <div className='form-container'>
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading': ''}>
                <h1>login</h1>
                <Form.Input
                    label='username'
                    type='text'
                    placeholder='wait... who are you?'
                    name='username'
                    value={values.username}
                    error={ errors.username ? true:false }
                    onChange={onChange}/>
                <Form.Input
                    label='password'
                    type='password'
                    placeholder='you should know this one'
                    name='password'
                    value={values.password}
                    error={ errors.password ? true:false }
                    onChange={onChange}/>
                <Button type='submit' primary>
                    login
                </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className='ui error message'>
                    <ul className='list'>
                        {(Object.values(errors).map(e => (
                            <li key={e}>{e}</li>
                        )))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const LOGIN_USER = gql`
    # Giving the variables into the mutation
    mutation register(
        $username: String!
        $password: String!
    ) {
        # The actual mutation with the variables provided
        login(
            username: $username
            password: $password
        ){
            # Response
            id email username createdAt token
        }
    }
`

export default Login