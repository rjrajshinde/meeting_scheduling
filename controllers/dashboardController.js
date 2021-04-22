const auth = require('../helpers/auth')

class dashboardController{
    /**
     * 1.Method To Render dashboard Page
    */   
   renderPage = [
       auth,
       async(req, res)=>{
           return res.render('dashboard/index');
       }
   ];
}

module.exports = new dashboardController();