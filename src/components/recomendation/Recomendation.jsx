import { useEffect, useState } from 'react'
import { followApi, getUsers, usersApi } from '../../assets/api/api'
import RecItem from './recItem/RecItem'
import RecList from './recList/RecList'
import './style.scss'

const Recomendation = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers(setUsers)
    }, []);

    return (
        <div className='rec'>
            <div className="rec__title">
                <p className='rec__title-text'>Recomendations</p>
                <p className="rec__link">All</p>
            </div>
            <RecList users={users} />
        </div>
    )
}

export default Recomendation