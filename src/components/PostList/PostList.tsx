import React from 'react'
import moment from 'moment'
import { Link } from 'gatsby'

import {
  PostListWrapper,
  PostWrapper,
  PostTitle,
  PostDescription,
  PostFooterItem,
  PostFooter
} from './PostList.styled'

function formatDate (date) {
  return moment(date, 'YYYY-MM-DD').format('MMM D, YYYY')
}

interface Post {
  id: string
  title: string
  description: string
  createdAt: moment.Moment
  timeToRead: number
}

const PostItem = ({ post }: { post: Post }) => (
  <PostWrapper>
    <Link to={`/posts/${post.id}.html`}>
      <PostTitle>{post.title}</PostTitle>
      <PostDescription>{post.description}</PostDescription>
      <PostFooter>
        <PostFooterItem>{formatDate(post.createdAt)}</PostFooterItem>
      </PostFooter>
    </Link>
  </PostWrapper>
)

const PostList = ({ posts }: any) => (
  <PostListWrapper>
    {posts.map(post => (
      <PostItem key={post.id} post={post} />
    ))}
  </PostListWrapper>
)

export default PostList
