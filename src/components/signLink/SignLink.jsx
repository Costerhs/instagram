import { NavLink } from 'react-router-dom'
import './style.scss'

const SignLink = ({ isSignUp }) => {
    return (
        <div className="signUp__link">
            <p className="signUp__switch">
                {!isSignUp ? 'Not registered yet?' : 'Have account?'} <NavLink to={isSignUp ? '/signIn' : '/signUp'}>{!isSignUp ? 'Sign up' : 'Sign in'}</NavLink>
            </p>
        </div>
    )
}

export default SignLink