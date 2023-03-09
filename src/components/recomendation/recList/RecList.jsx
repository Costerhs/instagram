import React from 'react'
import RecItem from '../recItem/RecItem'

const RecList = ({ users }) => {
  return (
    <div className="rec__list">
      {users.map((el, ind) => {
        if (el.id == localStorage.getItem('id')) {
          return
        }
        return <RecItem data={el} key={ind} />
      })}
    </div>
  )
}

export default RecList