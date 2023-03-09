import React from 'react'

export const SignUpInfo = () => {
    return (
        <>
            <div className="signUp__info">
                <p className="signUp__info-p">
                    People who use our service
                    could upload your contact information to Instagram.
                    <a href="https://www.facebook.com/help/instagram/261704639352628">
                        More
                    </a>
                </p>

            </div>
            <div className="signUp__info">
                <p className="signUp__info-p">
                    By registering, you accept our
                    <a href="https://help.instagram.com/581066165581870/?locale=ru_RU">
                        Terms, Privacy Policy
                    </a>
                    <span>и</span>
                    <a href="https://help.instagram.com/1896641480634370/">
                        Cookie Policy.
                    </a>
                </p>
            </div></>
    )
}

export default SignUpInfo
