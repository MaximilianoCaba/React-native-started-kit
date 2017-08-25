const userRepository = require('../../repository/user/user-repository')

function login(username, password) {
    return new Promise((resolve, reject) =>{
        userRepository.login(username, password).then(resolve).catch(reject)
    })
}

function register() {
    return new Promise((resolve, reject) =>{
        userRepository.register().then(resolve).catch(reject)
    })
}

function authorization(token) {
    return new Promise((resolve, reject) =>{
        userRepository.authorization(token).then(resolve).catch(reject)
    })
}

module.exports = {
    login,
    register,
    authorization
};