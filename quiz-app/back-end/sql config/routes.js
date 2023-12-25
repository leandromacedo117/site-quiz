const express = require('express');
const { default: App } = require('../../quiz-app/src/App');

const routes = express.Router();
routes.get('/testss' , (req,res) =>{
    res.send('sdjfdjkd')
})


App.listen(3000, () =>{
    console.log('rodando localhost...')
})