
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const User = props => {
  const user = props.users.find(user => user.id === props.user)
  if (user === undefined) return null

  const blogit = props.blogs.reduce((blogit, blog) => {
    if (blog.user.id === user.id) {
      blogit.push(blog)
    }
    return blogit
  }, [])

  return (
    <>
    <h2>Added Blogs by: {user.name} </h2>
    <ListGroup as="ul">
      {
        blogit.map(blog =>
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <ListGroup.Item as="li">{blog.title}</ListGroup.Item>
          </Link>
        )
      }
    </ListGroup>
    </>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users,
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, null)(User)