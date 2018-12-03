var requestParameter = require('./core/requestParamType');
var token = require('./authentication/Outh2TokenGenerator');
var opt = require('./core/Options');
var apiclient = require('./core/apiRequest');

var Client = function () {
    this.requestParameters = function () {
        return new requestParameter();
    }
    this.sendRequest = function (optionObj) {
        return apiclient.serviceResponse(optionObj);
    }
    this.getToken = function (url, clientId, clientSecret, proxy) {
        return token.getToken(url, clientId, clientSecret, proxy);
    }
    this.option = function () {
        return new opt();
    }

}
module.exports = new Client();