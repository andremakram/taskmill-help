/*
@title Example Phone call
@input
{
  "content-type" : "text/xml",
  "example" : "<?xml version='1.0' encoding='UTF-8'?>\n<Response>\n\t<Gather timeout='10' finishOnKey='*'>\n\t\t<Say>Hi Marcus, Please enter your pin number and then press star.</Say>\n\t</Gather>\n</Response>"
}
*/

module.exports = function(req, res, next){
  this.phone({
        'to' : '+12532143749',
        'twiml' : req.body
      })
      .then((result) => res.send(result))
      .catch((err) => res.status(err.statusCode || 500).send(err.error || err));
};
