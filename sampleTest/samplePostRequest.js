var serviceClient = require('../index');

//sample POST request

var url = "https://reqres.in/api/users";

//setting body
var body = serviceClient.requestParameters();
body.setKeyValue("name", "morpheus");
body.setKeyValue("job", "leader");

var opt = serviceClient.options();
opt.setEndpointUrl(url);
opt.setHttpMethod(opt.httpMethods().POST);
opt.setBody(body);

client.serviceResponse(opt.getOptionValues()).then(function (res) {
    console.log(res);
});
