import React from 'react'
import Post from './Post'
import Context from '../Context'
import { getPostList } from '../actions'

const { Consumer } = Context

export default () => {
  return (
    <div>
      <Consumer>
        {store => {
          const posts = store.getState().posts
          return (
            <div>
              <button onClick={() => store.dispatch(getPostList())}>
                GET POST LIST
              </button>
              {posts.length > 0 && (
                <ul>
                  {posts.map((post, index) => <Post key={index} data={post} />)}
                </ul>
              )}
            </div>
          )
        }}
      </Consumer>
    </div>
  )
}
