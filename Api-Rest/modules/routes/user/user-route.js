const express = require('express');
const router = express.Router();
const userService = require('../../service/user/user-service');

router.post('/login',(req, res) =>{
    userService.login(req.body.username, req.body.password)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(err))
});

router.post('/register',(req, res) =>{
    userService.register()
        .then(token => res.status(200).json(token))
        .catch(err => res.status(400).json(err))
});

router.post('/authorization',(req, res) =>{
    userService.authorization(req.body.token)
        .then(boolean => res.status(200).json(boolean))
        .catch(err => res.status(400).json(err))
});

module.exports = router;