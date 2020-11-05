import React, { useContext, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import { AuthContext } from '../context/auth'
import { useForm } from '../util/hooks'

function Register(props) {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(registerUser, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        // callback if successful
        update(_, { data: { register: userData } }) {
            context.login(userData)
            props.history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        // Setting the variables to the state
        variables: values
    })

    function registerUser() {
        addUser()
    }

    return (
        <div className='form-container'>
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading': ''}>
                <h1>register</h1>
                <Form.Input 
                    label='username'
                    type='text'
                    placeholder='make it cool'
                    name='username'
                    value={values.username}
                    error={ errors.username ? true:false }
                    onChange={onChange}/>
                <Form.Input 
                    label='email'
                    type='email'
                    placeholder='gimme that info'
                    name='email'
                    value={values.email}
                    error={ errors.email ? true:false }
                    onChange={onChange}/>
                <Form.Input 
                    label='password'
                    type='password'
                    placeholder='make it secure'
                    name='password'
                    value={values.password}
                    error={ errors.password ? true:false }
                    onChange={onChange}/>
                <Form.Input 
                    label='confirm your password'
                    type='password'
                    placeholder='make it the same'
                    name='confirmPassword'
                    error={ errors.confirmPassword ? true:false }
                    value={values.confirmPassword}
                    onChange={onChange}/>
                <Button type='submit' primary>
                    register
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

const REGISTER_USER = gql`
    # Giving the variables into the mutation
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        # The actual mutation with the variables provided
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ){
            # Response
            id email username createdAt token
        }
    }
`

export default Register