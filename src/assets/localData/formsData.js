const formsData = (watch, isSignUp) => {
    if (isSignUp) {
        return [
            {
                name: 'username',
                title: 'username',
                type: 'text',
                settings: {
                    required: true
                }
            },
            {
                name: 'first_name',
                title: 'Firstname',
                type: 'text',
                settings: {
                    required: true
                }
            },
            {
                name: 'last_name',
                title: 'Lastname',
                type: 'text',
                settings: {
                    required: true
                }
            },

            {
                name: 'bio',
                title: 'Bio',
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
                title: 'Password',
                type: 'password',
                settings: {
                    required: true,
                    minLength: { value: 8 }
                }
            },
            {
                name: 'password_repeat',
                title: 'Password repeat',
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
            title: 'Username',
            type: 'text',
            settings: {
                required: true
            }
        },
        {
            name: 'password',
            title: 'Password',
            type: 'password',
            settings: {
                required: true,
                minLength: { value: 8 }
            }
        }
    ]
}

export default formsData