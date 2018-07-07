import React from 'react'
import Person from './Person'
import Context from '../Context'
import { getPersonList } from '../actions'

const { Consumer } = Context

export default () => {
  return (
    <div>
      <Consumer>
        {store => {
          const persons = store.getState().persons
          return (
            <div>
              <button onClick={() => store.dispatch(getPersonList())}>
                GET PERSON LIST
              </button>
              {persons.length > 0 && (
                <ul>
                  {persons.map((person, index) => (
                    <Person key={index} data={person} />
                  ))}
                </ul>
              )}
            </div>
          )
        }}
      </Consumer>
    </div>
  )
}
