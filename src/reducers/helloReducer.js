const initialState = {
  greeting: 'FUCK'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO':
      return { ...state, greeting: 'HELLO' }

    default:
      return state
  }
}
