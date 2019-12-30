import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Users = props => {

  const usercount = props.users.length

  return (
        <>
            <h2>Users</h2>
            <Table striped bordered hover size="md">
              <thead>
                <tr>
                  <td>Users</td>
                  <td>Blogs Created</td>
                </tr>
              </thead>
              <tbody>
                {usercount ? (props.users.map(user =>
                  <tr key={user.id}>
                    <td><Link to={`/user/${user.id}`}>{user.username}</Link></td>
                    <td>{user.blogs.length}</td>
                  </tr>)
                ) : <></> }
              </tbody>
            </Table>
        </>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(Users)