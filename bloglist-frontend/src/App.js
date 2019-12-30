/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
//import logo from './logo.svg';
//import './App.css';
import Menu from './components/Menu'
//import Blog from './components/Blog'
import loginService from './services/login'
import blogService from './services/blogs'
import BlogForm from './components/Blogform'
import Blog from './components/Blog'
import Blogs from './components/Blogs'
import LoginFormi from './components/LoginForm'
import Notification from './components/Notification'
import Users from './components/Users'
import User from './components/User'
//import Errorinfo from './components/Errorinfo'
import { showNotification } from './reducers/notificationReducer'
import { setUser } from './reducers/loginReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { initialiseUsers } from './reducers/userReducer'

const App = (props) => {
  //const [blogs, setBlogs] = useState([])
  //const [username, setUsername] = useState('')
  //const [password, setPassword] = useState('')
  //const [user, setUser] = useState(null)


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogsappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    console.log('alustetaan')
    // console.log(props.user)
    props.initializeBlogs()
    props.initialiseUsers()
  },  [props.user])
  // const handleLogout = async (event) => {
  //   event.preventDefault()
  //   window.localStorage.removeItem('loggedBlogsappUser')
  //   blogService.setToken('')
  //   setUser(null)
  // }


  // const onUpdateblogs = (data) => {
  //   props.showNotification('Uusi blogi. ' + data['title'] + '  by ' + data['author'], 5)
  //   setBlogs(blogs.concat(data))
  // }

  // const onUpdateOneblog = (data) => {
  //   var temppi = blogs.filter(function(value, index, arr){
  //     return  value.id !== data.id
  //   }).concat(data).sort((a,b) => b.likes - a.likes)
  //   setBlogs(temppi)
  // }
  // const onRemove = (data) => {
  //   setBlogs(blogs.filter(function(value, index, arr){
  //     return  value.id !== data.id
  //   }))
  // }

  //if (user === null) {
  //   return (
  //     <div>
  //       <h2>Log in to application</h2>
  //       <Notification />
  //       {/* <Errorinfo message={errorMessage} /> */}
  //       <LoginForm />
  //     </div>
  //   )
  // }

    return (
      <Container>
      <Router>
        <div>
        <h2>Blogs</h2>
        {/* <Errorinfo message={errorMessage} /> */}
        {props.user
          ? (
            <div>
        <Menu />
        <Notification />
        <Route path="/create" render={() => <BlogForm />} />
        <Route exact path="/" render={() => <Blogs /> }/>
        <Route path="/login" render={() => <LoginFormi />} />
        <Route path="/blog/:id" render={({ match }) => <Blog blog={match.params.id}/> } />
        <Route path="/users" render={() => <Users /> }/>
        <Route path="/user/:id" render={({ match }) => <User user={match.params.id}/> }/>
          </div>
          )
          : <LoginFormi />
          }
      </div>
      </Router>
      </Container>
    )
}

const mapStateToProps = state => {
	return {
    user: state.user,
    blogs: state.blogs
	}
}

const mapDispatchToProps = {
  initializeBlogs,
  initialiseUsers,
  showNotification,
  setUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
