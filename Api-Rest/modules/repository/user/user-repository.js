var userDataBase = require('../../db/user-DB');
function login(username, password) {
    return new Promise((resolve, reject) =>{
        for(var user of userDataBase){
            if(user.username === username && user.password === password) resolve(user)
        }
        reject('usuario no encontrado')
    })
}

function register() {
    return new Promise((resolve, reject) => {
        for (var user of userDataBase) {
            if (user.username === '' && user.password === '') resolve(user.token)
        }
        reject('No se pudo registrar en este momento')
    })
}

function authorization(token) {
    return new Promise((resolve, reject) => {
        for (var user of userDataBase) {
            if (user.token === token) resolve(true)
        }
        reject(false)
    })
}

module.exports = {
    login,
    register,
    authorization
};