import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login, setUser } from '../reducers/loginReducer'
import { showNotification } from '../reducers/notificationReducer'
import blogService from '../services/blogs'
import { initializeBlogs } from '../reducers/blogReducer'
import { Form, Button } from 'react-bootstrap'

const LoginFormi = props => {

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      console.log(event.target)
      const dict = {
        username:event.target.Username.value, password:event.target.Password.value,
      }
      console.log(dict['name'])

      const user = await props.login(dict)

      window.localStorage.setItem(
        'loggedBlogsappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      props.setUser(user)
      props.history.push('/')
    } catch (exception) {
      props.showNotification('wrong credentials', 5)
    }
  }
  return (
    <div>
      <h2>login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
          />
          <Form.Label>password:</Form.Label>
          <Form.Control
            type="password"
          />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
/*   return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
        username
          <input
            name="Username"
          />
        </div>
        <div>
        password
          <input
            name="Password"
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  ) */
}

const mapDispatchToProps = {
  login, setUser, showNotification, initializeBlogs
}

const LoginForm = withRouter(LoginFormi)
export default connect(null, mapDispatchToProps)(LoginForm)