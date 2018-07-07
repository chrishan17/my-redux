import React, { Component } from 'react'

import Greeting from './Greeting'
import PersonList from './PersonList'
import PostList from './PostList'
import configureStore from '../configureStore'
import Context from '../Context'

const store = configureStore()
const { Provider } = Context

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return (
      <div>
        <Provider value={store}>
          <Greeting />
          <PersonList />
          <PostList />
        </Provider>
      </div>
    )
  }
}
