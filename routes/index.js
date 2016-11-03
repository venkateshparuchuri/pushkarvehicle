var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("in get call");
  pool.query('select * from 7eleven.inout',function(err,result){
if(err){
console.log(err);
}
else {
  console.log(result);

  // res.render('home', { title: 'Express' });
  }
});
res.render('home', { title: 'Express' });
});

router.post('/get/data', function(req, res, next) {
console.log(req.body);
  console.log("in post call");
  var data={name:req.body.name,rootname:req.body.route,status:req.body.status}
  pool.query('insert into 7eleven.inout set ?',data,function(err,result){
if(err){
console.log(err);
}
else {
  console.log(result);
  res.send(result);
  // res.render('home', { title: 'Express' });
  }
});

});
module.exports = router;
