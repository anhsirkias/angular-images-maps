var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient




/* GET home page. */
router.post('/', function(req, res) {
	console.log(req.body.pic);
  MongoClient.connect('mongodb://localhost:27017/userlocation', function(err, db) {
	if(err)
	{
		console.log("unsucc");
	}
	else
	{
		db.collection('users').insert({"user":req.body.name,"location":req.body.location,"img":req.body.pic },function(err, doc)
                {
                    if(err)      console.log("unsucc inserted"); 
                    else
                    {
                       
							// console.log("succlessfully inserted");
							// console.log(doc[0]);
							res.send(doc);
						    
                    }  
                });
	}

});

});

router.get('/', function(req, res) {
  
// console.log("saved successfully")
// res.send("sai");

  res.render('index');
});
router.get('/info', function(req, res) {
  
// console.log("saved successfully")
// res.send("saikrishna");
res.render('index');

  // res.render('index', { title: 'Express' });
});

module.exports = router;
