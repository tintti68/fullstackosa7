import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'

const Blogs = props => {
  const style = {
    border: 'solid',
    padding: 5,
    borderWidth: 1
  }
  return (
        <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <Link to="/create"><Button id="create" variant="primary">Create New</Button></Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.blogs ?
                  (props.blogs.map(blog =>
                    <tr key={blog.id}>
                      <td>
                        <Link to={`/blog/${blog.id}`}>
                          <p  style={style}>{ blog.title}</p>
                        </Link>
                      </td>
                    </tr>)):
                  <tr>
                    <td>
                      <p>Empty</p>
                    </td>
                  </tr> }
              </tbody>
            </Table>
        </>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    blogs: state.blogs,
    user: state.user,
  }
}

export default connect(mapStateToProps, null)(Blogs)