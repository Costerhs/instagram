import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { usersApi } from '../../assets/api/api'
import { setLocal } from '../../assets/defFunction/defFunction'
import formsData from '../../assets/localData/formsData'
import SignLink from '../../components/signLink/signLink'
import SignUpInfo from './singUpInfo/SignUpInfo'
import './style.scss'

const Sign = () => {
    const [error, setError] = useState()
    const navigate = useNavigate()
    const isSignUp = useLocation().pathname.indexOf('signUp') >= 0

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm({
        mode: 'onBlur',
    })
    const onSubmit = async (data) => {
        if (isSignUp) {
            usersApi.register(data)
                .then(() => {
                    navigate('/signIn')
                })
                .catch(el => {
                    setError(Object.values(el.response.data)[0])
                })
            return
        }
        usersApi.token(data)
            .then(el => {
                setLocal('access', el.data.access)
                setLocal('refresh', el.data.refresh)
                setLocal('username', data.username)
                usersApi.getUsers()
                    .then(el => {
                        let userId = el.data.find(el => el.username === data.username).id
                        setLocal('id', userId)
                        navigate('/')
                    })
            })
    }

    return (
        <div className='sign'>
            <div className="sign__form-block">
                <i className="sign__img" />
                {isSignUp && <h1 className="sign__title">
                    Register to see photos and videos of your friends.
                </h1>}
                <form onSubmit={handleSubmit(onSubmit)} className="sign__form">
                    {formsData(watch, isSignUp).map((el, ind) => {
                        return <div className="sign__item" key={ind}>
                            <input type={el.type} className="sign__inp" id={el.name} {...register(el.name, el.settings)} />
                            <label htmlFor="name" className="sign__lab">{el.title}</label>
                            {errors?.[el.name] ? <div className='sign__err-icon'></div> : <div className='sign__succ-icon'></div>}
                        </div>
                    })}
                    <p className="sign__error">
                        {error}
                    </p>
                    {isSignUp && <SignUpInfo />}
                    <button type='submit' className="sign__btn">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>

            </div>
            <SignLink isSignUp={isSignUp} />
        </div >
    )
}

export default Sign
