import React from 'react'
import Context from '../Context'
import { HELLO, WORLD } from '../actions'

const { Consumer } = Context

export default () => {
  return (
    <Consumer>
      {store => (
        <div>
          <div>
            {store.getState().hello.greeting +
              ' ' +
              store.getState().world.greeting}
          </div>
          <button onClick={store.dispatch.bind(null, HELLO)}>Hello</button>
          <button onClick={store.dispatch.bind(null, WORLD)}>World</button>
        </div>
      )}
    </Consumer>
  )
}
