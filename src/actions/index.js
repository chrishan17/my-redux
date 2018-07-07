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
