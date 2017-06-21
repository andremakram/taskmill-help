/*
@title Example SMS send
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from TaskMill"
}
*/

module.exports = function(req, res, next){
  req
    .app
    .sms({
      'to' : '+12532143749',
      'body' : req.body
    })
    .then((result) => res.send(result))
    .catch((err) => res.status(err.statusCode || 500).send(err.error || err));
};
