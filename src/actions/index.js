export const HELLO = {
  type: 'HELLO'
}

export const WORLD = {
  type: 'WORLD'
}

const getPersonList = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(persons => {
        dispatch({ type: 'GET_PERSON_LIST', payload: persons })
      })
  }
}

export { getPersonList }

const getPostList = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => ({
      type: 'GET_POST_LIST',
      payload: posts
    }))
}

export { getPostList }
