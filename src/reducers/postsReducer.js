const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POST_LIST':
      return action.payload

    default:
      return state
  }
}
