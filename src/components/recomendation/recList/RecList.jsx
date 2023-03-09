import React from 'react'
import RecItem from '../recItem/RecItem'

const RecList = ({ users, isPage }) => {
  return (
    <div className="rec__list">
      {users.map((el, ind) => {
        if (el.id == localStorage.getItem('id')) {
          return
        }
        return <RecItem isPage={isPage} data={el} key={ind} />
      })}
    </div>
  )
}

export default RecList