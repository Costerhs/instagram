import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getUsers } from '../../assets/api/api'
import RecList from './recList/RecList'
import './style.scss'

const Recomendation = ({ isPage }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers(setUsers, isPage)
    }, []);

    return (
        <div className='rec'>
            <div className="rec__title">

                {!isPage ? <>
                    <p className='rec__title-text'>Recomendations</p>
                    <NavLink to={'/recomendation'} className="rec__link">All</NavLink>  </>
                    : <p className='rec__title-page'>Recomendations</p>}

            </div>
            <RecList isPage={isPage} users={users} />
        </div>
    )
}

export default Recomendation