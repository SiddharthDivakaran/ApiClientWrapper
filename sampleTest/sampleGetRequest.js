var serviceClient = require('../index');
//sample GET request

var url = "https://jsonplaceholder.typicode.com/todos/1"

var opt = serviceClient.option();
opt.setEndpointUrl(url);
opt.setHttpMethod(opt.httpMethods().GET);

serviceClient.sendRequest(opt.getOptionValues()).then(function (res) {
      console.log("Response: ");
      console.log(res);
})

