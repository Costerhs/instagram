import { NavLink } from 'react-router-dom'
import './style.scss'

const SignLink = ({ isSignUp }) => {
    return (
        <div className="signUp__link">
            <p className="signUp__switch">
                {!isSignUp ? 'Уже зарегистрированы?' : 'Есть аккаунт?'} <NavLink to={isSignUp ? '/signIn' : '/signUp'}>{!isSignUp ? 'Регистрация' : 'Вход'}</NavLink>
            </p>
        </div>
    )
}

export default SignLink