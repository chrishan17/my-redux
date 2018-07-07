const initialState = {
  greeting: 'YOU'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'WORLD':
      return { ...state, greeting: 'WORLD' }

    default:
      return state
  }
}
