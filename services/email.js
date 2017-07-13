/*
@title Example Email send
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from TaskMill"
}
*/

module.exports = function(req, res, next){
  req
    .app
    .email
    .send({
        to      : 'andre.makram@gmail.com'
      , from    : 'andre.makram@gmail.com'
      , subject : 'subject: ' + req.body
      , text    : req.body
    })
    .then((result) => res.send(result))
    .catch((err) => res.status(err.statusCode || 500).send(err.error || err));
};
