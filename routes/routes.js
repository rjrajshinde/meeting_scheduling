module.exports = (app)=>{
    app.use('/', require('./dashboard'));
    app.use('/manageUsers', require('./manageUsers'));
    app.use('/manageMeetings', require('./manageMeetings'));
    app.use('/auth', require('./auth'));
}