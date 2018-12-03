var clinet = require('../core/apiRequest')
var option = require('../core/Options');


//sample GET request

var url = "https://jsonplaceholder.typicode.com/todos/1"

var opt = new option();
opt.setEndpointUrl(url);
opt.setHttpMethod(opt.httpMethods().GET);

clinet.serviceResponse(opt.getOptionValues()).then(function (res) {
      console.log("Response: ");
      console.log(res);
});


