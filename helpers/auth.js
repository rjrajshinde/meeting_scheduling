module.exports = (req, res, next) => {
    //Check If User Is Logged In or Not, if not then make user logout otherwise, proceed further
    if (!req.session.userName)
        res.redirect('/auth/logout');
    else
        next();
}