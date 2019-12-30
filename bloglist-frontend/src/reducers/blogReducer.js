import blogService from '../services/blogs'

const blogReducer = (state = null, action) => {
  switch (action.type) {
  case 'INIT':
    return [...action.data]
  case 'UPDATE':
    
    return state.map(blog => blog.id !== action.data.id ? blog : action.data)
  case 'DELETE':
    return state.filter(blog => blog.id !== action.data.id)
  case 'CREATE':
    return [...state, action.data]
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT',
      data: blogs,
    })
  }
}

export const likeBlog = data => {
  return async dispatch => {
    const response = await blogService.update(data)
    dispatch({
      type: 'UPDATE',
      data: response
    })
  }
}

export const deleteBlog = data => {
  return async dispatch => {
    await blogService.dellaus(data)
    dispatch({
      type: 'DELETE',
      data: data
    })
  }
}

export const createBlog = data => {
  return async dispatch => {
    const response = await blogService.create(data)
    dispatch({
      type: 'CREATE',
      data: response
    })
  }
}

export default blogReducer