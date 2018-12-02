var option = require('../core/Options');
var requestParameter = require('../core/requestParamType');
var client = require('../core/apiRequest');
var queryString = require('querystring');
var grantType = require('./oauth2GrantTypes');

var tokenGeneration = function () {
    /**
     * @param {*url oauth url}
     * @param {*clientId clientId}
     * @param {*clientSecret clientSecret}
     * @param {*proxy proxy value to be set if proxy needed to be passed}
     * */
    this.getToken = function (url, clientId, clientSecret, proxy) {
        var opt = new option(url, "POST");
        opt.setProxy(proxy);

        //setting request body
        var body = new requestParameter();
        body.setKeyValue("grant_type", grantType.CLIENT_CREDENTIALS);
        body.setKeyValue("client_id", clientId);
        body.setKeyValue("client_secret", clientSecret);

        var postBody = queryString.stringify(body.getKeyValuePair());

        //setting request header
        var header = new requestParameter();
        header.setKeyValue("Content-Type", "application/x-www-form-urlencoded");
        header.setKeyValue("Content-Length", postBody.length);

        opt.setHeader(header);
        opt.setBody(postBody);

        return client.serviceResponse(opt.getOptionValues()).then(function (token) {
            return token.access_token;
        });

    }
}
module.exports = new tokenGeneration();