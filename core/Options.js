var HttpsProxyAgent = require('https-proxy-agent');
var proxy = require('yargs').argv.proxy;
var httpMethod = require('./HttpMethods');

var Options = function () {
    this["json"] = true;
    if (proxy !== undefined && proxy !== "") {
        this["agent"] = new HttpsProxyAgent(proxy);
    }
}

Options.prototype.setEndpointUrl = function (url) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    if (regex.test(url) === false) {
        throw new Error("Please give valid url");
    }
    else {
        this["url"] = url;
    }
}
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
Options.prototype.httpMethods = function () {
    return httpMethod;
}
Options.prototype.setProxy = function (proxyValue) {
    if (proxyValue === "") {
        throw new Error("proxy value cannot be blank");
    } else if (proxyValue !== undefined) {
        this.agent = new HttpsProxyAgent(proxyValue);
        this["agent"] = this.agent;
    }
}
Options.prototype.setHeader = function (headerValue) {
    if (headerValue !== undefined) {
        this["headers"] = headerValue;
    }
}
Options.prototype.setBody = function (body) {
    if (body !== undefined) {
        this["body"] = body;
    }
}
Options.prototype.setQueryString = function (qs) {
    if (qs !== undefined) {
        this["qs"] = qs;
    }
}
Options.prototype.getOptionValues = function () {
    keys = Object.keys(this);
    value = Object.values(this);
    return keys.reduce(function (map, key, index) {
        map[key] = value[index];
        return map;
    }, {});
}
module.exports = Options;