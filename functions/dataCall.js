const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_KEY;
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

exports.handler = function(event, context, callback) {
    
	s3.listBuckets(function(err, data) {
	  if (err) {
	    console.log("Error", err);
	  } else {
	    console.log("Success", data.Buckets);
	  }
	});

    callback(null, {
    statusCode: 200,
    body: "S3 request succesful"
    });
}