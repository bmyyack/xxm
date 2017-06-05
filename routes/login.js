var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/loginPage', function(req, res, next) {
  console.info("恭喜你来到了login的路由文件");
  //res.send('respond with a resource');
    var id=req.query.id;
    if(id==1){
        res.render('login', { });
    }else{
        res.render('error', { });
    }

});

router.post('/login', function(req, res, next) {
    // res.render('login', {});
    var userName=req.body.userName;
    var password=req.body.password;
    if(userName=='ack' && password=='018'){
      res.render('success',{username:userName});
    }else{
      res.render('error',{ });
    }


});
module.exports = router;
