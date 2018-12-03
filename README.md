# ApiClientWrapper
A service wrappers that can be used to send rest api request (get and post handled for now...)

## Usage:
1.Download and install the package.
2.To send the request we can pass all te details in the form of option object as a request parameter.

## Creating option object:
var client = require('restclientwrapper')

var option = client.options()
### adding endpoint url:
option.setEndpointUrl(url)

### adding httpMethod/http verb:
option.setHttpMethod(option.httpMethods().GET)
#### note:- right nnow only GET and POST methods are handled

### adding body:
var body = client.requestParameters()
body.setKeyValue("name","morpheous")

same way other information can be added to body on basis of key/value pair

#### same way headers and queryString can be created

### setting body/header/querystring to option:
option.setBody(body)

sameway we can create header and querystring and add them using their respective methods

### making request to rest service:

client.serviceResponse(option.getOptionValue())

use .then() to resolve the promise 

### getting oauth2 token of granttype client credential

option.getToken(url,clientId,clientSecret)

### setting proxy:
proxy can be set using option.setProxy() method or it can be passed as a flag from command prompt (--proxy="proxy url")
