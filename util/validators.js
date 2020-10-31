module.exports.validateRegisterInput = (username, email, password, confirmPassword) => {
    var errors = {}

    if (username.trim() === '') {
        errors.username = 'you need a username'
    }

    if (email.trim() === '') {
        errors.email = 'you need an email'
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if (!email.match(regEx)) {
            errors.email = 'that email isn\'t cool or real'
        }
    }

    if (password === '') {
        errors.password = 'you need a password, homie'
    } else if (password != confirmPassword) {
        errors.confirmPassword = 'your passwords are sisters, not twins'
    }

    return { errors, valid: Object.keys(errors).length < 1 }
}

module.exports.validateLoginInput = (username, password) => {
    var errors = {}

    if (username.trim() === '') {
        errors.username = 'don\'t be shy, put a username'
    }

    if (password === '') {
        errors.password = 'you need the password, homie'
    }

    return { errors, valid: Object.keys(errors).length < 1 }
}