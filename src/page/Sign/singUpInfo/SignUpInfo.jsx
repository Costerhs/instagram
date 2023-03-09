import React from 'react'

export const SignUpInfo = () => {
    return (
        <>
            <div className="signUp__info">
                <p className="signUp__info-p">
                    Люди, которые пользуются нашим сервисом,
                    могли загрузить вашу контактную информацию в Instagram.
                    <a href="https://www.facebook.com/help/instagram/261704639352628">
                        Подробнее
                    </a>
                </p>

            </div>
            <div className="signUp__info">
                <p className="signUp__info-p">
                    Регистрируясь, вы принимаете наши
                    <a href="https://help.instagram.com/581066165581870/?locale=ru_RU">
                        Условия, Политику конфиденциальности
                    </a>
                    <span>и</span>
                    <a href="https://help.instagram.com/1896641480634370/">
                        Политику в отношении файлов cookie.
                    </a>
                </p>
            </div></>
    )
}

export default SignUpInfo
