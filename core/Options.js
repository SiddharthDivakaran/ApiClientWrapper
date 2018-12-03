var HttpsProxyAgent = require('https-proxy-agent');
var proxy = require('yargs').argv.proxy;
var httpMethod = require('./HttpMethods');

var Options = function () {
    this["json"] = true;
    if (proxy !== undefined && proxy !== "") {
        this["agent"] = new HttpsProxyAgent(proxy);
    }
}
/**
 * 
 * @param {url service/rest api end point url i.e host+path}  
 */
Options.prototype.setEndpointUrl = function (url) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    if (regex.test(url) === false) {
        throw new Error("Please give valid url");
    }
    else {
        this["url"] = url;
    }
}
/**
 * 
 * @param {method http method GET,POST etc...}  
 */
Options.prototype.setHttpMethod = function (method) {
    switch (method) {
        case httpMethod.GET:
            this["method"] = "GET";
            break;
        case httpMethod.POST:
            this["method"] = "POST";
            break;
        case httpMethod.PUT:
            this["method"] = "PUT";
            break;
        case httpMethod.DELETE:
            this["method"] = "DELETE";
            break;
        default:
            throw new Error("Not a valid http verb/method")
    }
}
/**
 * Call this to get valid http method type(i.e GET,POST etc...)
 */
Options.prototype.httpMethods = function () {
    return httpMethod;
}
/**
 * 
 * @param {proxyvalue proxy value to be set if using proxy}  
 */
Options.prototype.setProxy = function (proxyValue) {
    if (proxyValue === "") {
        throw new Error("proxy value cannot be blank");
    } else if (proxyValue !== undefined) {
        this.agent = new HttpsProxyAgent(proxyValue);
        this["agent"] = this.agent;
    }
}
/**
 * 
 * @param {headerValue header object that is to be set in option}  
 */
Options.prototype.setHeader = function (headerValue) {
    if (headerValue !== undefined) {
        this["headers"] = headerValue;
    }
}
/**
 * 
 * @param {body body object that is to be set in option}  
 */
Options.prototype.setBody = function (body) {
    if (body !== undefined) {
        this["body"] = body;
    }
}
/**
 * 
 * @param {qs querystring object that is to be set in option}  
 */
Options.prototype.setQueryString = function (qs) {
    if (qs !== undefined) {
        this["qs"] = qs;
    }
}
/**
 * call this to get option object that is to be passed to request
 */
Options.prototype.getOptionValues = function () {
    keys = Object.keys(this);
    value = Object.values(this);
    return keys.reduce(function (map, key, index) {
        map[key] = value[index];
        return map;
    }, {});
}
module.exports = Options;