import React, { useEffect } from 'react'
import { url } from '../config'
import { useFetchAPI } from '../hooks/useFetchAPI'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import './styles/userlist.css'
import Title from './Title'
/*eslint-disable*/

const UserList = () => {
  const { list } = useSelector( (state)=> state.users)
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(useFetchAPI(url))
  }, [dispatch])
  
  return (
    <div className='container list'>
      <Title/>
      <div className='row'>
        {
          list.map((user, index)=>{
            return(
              <Card
                key={index}
                user={user}
              />
            )
          })
        }

      </div>
    </div>
  );
};

export default UserList
