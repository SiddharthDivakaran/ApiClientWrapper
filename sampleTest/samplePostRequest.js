var client = require('../core/apiRequest');
var option = require('../core/Options');
var requestParameter = require('../core/requestParamType');

//sample POST request

var body=new requestParameter();
body.setKeyValue("name","morpheus");
body.setKeyValue("job","leader");

var url="https://reqres.in/api/users";
var opt=new option(url,"POST");

client.serviceResponse(opt.getOptionValues()).then(function(res){
    console.log(res);
});
