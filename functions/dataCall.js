const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_KEY;
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});
let s3Params = {
	Bucket: 'datasd1-dev'
}

exports.handler = function(event, context, callback) {

	console.log("Handler function running");

	s3Params.Key = 'budget/actuals_capital_FY17_datasd.csv';
    
	s3.getObject(s3Params, function(err, data) {
      if (err)
        return res
          .status(500)
          .json({error: 'Has occurred an error, please try later.'})

      let object = JSON.parse(data.Body.toString());
      console.log("Got object");
  	})

    callback(null, {
    statusCode: 200,
    body: "S3 request succesful"
    });
}