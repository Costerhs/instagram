const formsData = (watch, isSignUp) => {
    if (isSignUp) {
        return [
            {
                name: 'username',
                title: 'Имя пользователя',
                type: 'text',
                settings: {
                    required: true
                }
            },
            {
                name: 'first_name',
                title: 'Имя',
                type: 'text',
                settings: {
                    required: true
                }
            },
            {
                name: 'last_name',
                title: 'Фамилие',
                type: 'text',
                settings: {
                    required: true
                }
            },

            {
                name: 'bio',
                title: 'Биография',
                type: 'text',
                settings: {
                    required: true
                }
            },
            {
                name: 'email',
                title: 'Email',
                type: 'email',
                settings: {
                    required: true,
                    pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                    }
                }
            },
            {
                name: 'password',
                title: 'Пароль',
                type: 'password',
                settings: {
                    required: true,
                    minLength: { value: 8 }
                }
            },
            {
                name: 'password_repeat',
                title: 'Подтвердить пароль',
                type: 'password',
                settings: {
                    required: true,
                    validate: (value) =>
                        value === watch('password') || 'Passwords do not match',
                }
            }, {
                name: 'avatar',
                title: '',
                type: 'file',
                settings: {
                    required: true
                }
            },
        ]
    }
    return [
        {
            name: 'username',
            title: 'Имя пользователя',
            type: 'text',
            settings: {
                required: true
            }
        },
        {
            name: 'password',
            title: 'Пароль',
            type: 'password',
            settings: {
                required: true,
                minLength: { value: 8 }
            }
        }
    ]
}

export default formsData