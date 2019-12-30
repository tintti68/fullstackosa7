import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { likeBlog, deleteBlog } from '../reducers/blogReducer'
import { Button } from 'react-bootstrap'

var Blog = props => {
  // const [visible, setVisible] = useState(false)
  // const [showremove, setremove] = useState(false)
  // const hideWhenVisible = { display: visible ? 'none' : '' }
  // const showWhenVisible = { display: visible ? '' : 'none' }
  // const allowremove = { display: showremove ? '' : 'none' }


  // const toggleVisibility = () => {
  //   setVisible(!visible)
  // }
  console.log(props.blog)
  const blog = props.blogs.find(blog => blog.id === props.blog)
  console.log(blog)
  const like = (blog) => {
    console.log(blog)
    blog.likes = blog.likes + 1
    props.likeBlog(blog)
  }

  const remove = (blogi) => {
    console.log('poistetaan')
    props.deleteBlog(blogi)
    props.history.push('/')
  }

  var uname = 'tuntematon'
  if(blog.user !== null){
    uname = blog.user.username
  }

  // if(blog.user){
  //   console.log(user)
  //   uname = blog.user.name
  //   if(user.username===blog.user.username){
  //     if(!showremove){
  //       setremove(true)
  //     }
  //   }
  // }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}  className='blog'>

      {blog.title}  {blog.author}  {blog.url}
      <br/>
      {blog.likes} likes
      <button onClick={() => like(blog)}>Like</button>
      <br/>
        added by {uname}
      <br/>
      <button onClick={() => remove(blog)}>Remove</button>

    </div>
  )
}


const mapStateToProps = state => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = {
  likeBlog,
  deleteBlog
}

Blog = withRouter(Blog)

export default connect(mapStateToProps, mapDispatchToProps)(Blog)