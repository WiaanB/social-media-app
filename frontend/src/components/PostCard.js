import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon, Image, Label, Popup } from 'semantic-ui-react'
import moment from 'moment'

import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'
import { AuthContext } from '../context/auth'

function PostCard({ post: { username, body, createdAt, id, likeCount, commentCount, likes }}) {

    const { user } = useContext(AuthContext)
    
    return (
        <Card fluid>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src="https://www.flaticon.com/svg/static/icons/svg/565/565431.svg"
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <LikeButton user={user} post={{ id, likes, likeCount }}/>
            <Popup content='comment on post' inverted trigger={
            <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
                <Button color='blue' basic>
                    <Icon name='comments' />
                </Button>
                <Label basic color='blue' pointing='left'>
                    {commentCount}
                </Label>
            </Button>}/>
            {user && user.username === username && <DeleteButton postId={id} />}
            </Card.Content>
        </Card>
    )
}

export default PostCard