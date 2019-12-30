import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Button, Form } from 'react-bootstrap'
import { logout } from '../reducers/loginReducer'

const Menu = props => {


  const padding = { padding: 5 }

  const handleLogout = () => {
    console.log('ulos')
    window.localStorage.clear()
    props.logout()
  }

  return (

    <Navbar>
      <Nav>
        <Link style={ padding } to="/">Blogs</Link>
        <Link style={ padding } to="/users">Users</Link>
        {
          props.user
            ? (
              <>
                <em>{ props.user.username } logged in </em>
                <em> <button onClick={() => handleLogout}>Logout</button></em>
                </>
/*               <Form inline className="logout">
                <Nav.Link>
                  <Nav.Item>{ props.user.username }</Nav.Item>
                </Nav.Link>
                <Button onClick={handleLogout}>Logout</Button>
              </Form> */
            )
            : null
        }
      </Nav>
    </Navbar>
  )
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)