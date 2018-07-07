const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PERSON_LIST':
      return action.payload

    default:
      return state
  }
}
