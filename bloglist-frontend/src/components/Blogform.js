
import React from 'react'
import PropTypes from 'prop-types'
import { createBlog } from '../reducers/blogReducer'
import { useField } from '../hooks'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
var BlogForm = props => {

  const { bind:title, reset:resettitle } = useField('text')
  const { bind:author, reset:resetauthor } = useField('text')
  const { bind:url, reset:reseturl } = useField('text')
  // const [newblogvisible, setvisible] = useState('')
  // const hideWhenVisible = { display: newblogvisible ? 'none' : '' }
  // const showWhenVisible = { display: newblogvisible ? '' : 'none' }

  const onSubmit = event => {

    event.preventDefault()
    const BlogObject = {
      title: title.value,
      author: author.value,
      url: url.value,
    }
    props.createBlog(BlogObject).then(() => {
      resetauthor()
      resettitle()
      reseturl()
      props.history.push('/')
    })
  }

  return (
    <div>
      <h2>Create new</h2>

      <form onSubmit={onSubmit}>
        <div>
            Title
          <input {...title}
          />
        </div>
        <div>
          Author
          <input {...author}
          />
        </div>
        <div>
          Url
          <input {...url}
          />
        </div>
        <button type="submit">create</button>

      </form>
    </div>
  )
}

BlogForm.propTypes = {
  onUpdate: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  createBlog,
}

BlogForm = withRouter(BlogForm);
export default connect(null,mapDispatchToProps)(BlogForm)