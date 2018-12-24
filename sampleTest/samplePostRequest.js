var serviceClient = require('../index');

//sample POST request

var url = "https://reqres.in/api/users";

//setting body
var body = serviceClient.requestParameters();
body.setKeyValue("name", "morpheus");
body.setKeyValue("job", "leader");

var opt = serviceClient.option();
opt.setEndpointUrl(url);
opt.setHttpMethod(opt.httpMethods().POST);
opt.setBody(body);

serviceClient.sendRequest(opt.getOptionValues()).then(function(res){
  console.log(res);
});

