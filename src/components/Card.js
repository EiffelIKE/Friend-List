import React from 'react'
import './styles/card.css'

const Card = ({ user }) => {
  return (
    <div className='col-md-3 mb-4'>
        <div className='card'>
          <img src={user.avatar} alt='user image' />
          <div className='card-body'>
          <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
          <p className='card-text'>{user.email}</p>
          </div>
        </div>
    </div>

  )
}

export default Card
