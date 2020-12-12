http=require('http');
url=require('url');
querystring = require('querystring');
var dt = require('./calumodu')
function onRequest(request,response)
{
  var path = url.parse(request.url).pathname;
  console.log('Request for '+path+' received.');
  var query =url.parse(request.url).query;
  console.log(query);
  var name = querystring.parse(query)["fn"];
  var email=querystring.parse(query)["sn"];
  var psw=querystring.parse(query)["operation"];
  response.write(name+' '+psw+' '+email+' = '+dt.myCalculator(name,email,psw));
  response.end();
}
http.createServer(onRequest).listen(8000);
console.log('Server has Started.');
 
