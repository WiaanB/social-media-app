import React, { useContext } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Button, Card, Grid, Icon, Image, Label } from 'semantic-ui-react'
import moment from 'moment'

import { AuthContext } from '../context/auth'
import LikeButton from '../components/LikeButton'
import DeleteButton from '../components/DeleteButton'

function SinglePost(props) {
    const postId = props.match.params.postId
    const { user } = useContext(AuthContext)

    const { loading, data } = useQuery(FETCH_POST_QUERY, {
        variables: {
            postId
        }
    })

    function deletePostCallback() {
        props.history.push('/')
    }

    let postMarkup
    if (loading) postMarkup =  <p>Loading...</p>
    if (data) {
        var { id, body, createdAt, username, comments, likes, likeCount, commentCount } = data.getPost
        postMarkup = (<Grid>
            <Grid.Row>
                <Grid.Column width={2}>
                    <Image src='https://www.flaticon.com/svg/static/icons/svg/565/565431.svg'
                    size="small"
                    float="right"/>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Card fluid style={{padding: 20}}>
                        <Card.Header>{username}</Card.Header>
                        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                        <Card.Description>{body}</Card.Description>
                        <hr/>
                        <Card.Content extra>
                            <LikeButton user={user} post={{id, likeCount, likes }}/>
                            <Button as="div" labelPosition="right" onClick={() => console.log("Comment ", user)}>
                                <Button basic color="blue">
                                    <Icon name='comments'/>
                                </Button>
                                <Label basic color="blue" pointing="left">
                                    {commentCount}
                                </Label>
                            </Button>
                            {user && user.username === username && <DeleteButton postId={id} callback={deletePostCallback}/>}
                        </Card.Content>
                    </Card>
                    {comments.map(e => (
                        <Card fluid key={e.id}>
                            <Card.Content>
                                {user && user.username === e.username && (
                                    <DeleteButton postId={id} commentId={e.id} />
                                )}
                                <Card.Header>{e.username}</Card.Header>
                                <Card.Meta>{moment(e.createdAt).fromNow()}</Card.Meta>
                                <Card.Description>{e.body}</Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
                </Grid.Column>
            </Grid.Row>
        </Grid>)
    }

    return postMarkup
}

const FETCH_POST_QUERY = gql `
    query($postId: ID!) {
        getPost(postId: $postId) {
            id
            body
            createdAt
            username
            likeCount
            likes {
                username
            }
            commentCount
            comments {
                id username createdAt body
            }
        }
    }
`

export default SinglePost