var HttpsProxyAgent = require('https-proxy-agent');
var proxy = require('yargs').argv.proxy;
var httpMethod = require('./HttpMethods');

var Options = function () {
    if (arguments.length < 2) {
        throw new Error("Minimum 2 parameters required that are endpoint Url and httpMethod( GET,POST etc...)");
    }
    else {
        this["url"] = arguments[0];
        switch (arguments[1]) {
            case httpMethod.GET:
                this["method"] = "GET";
                break;

            case httpMethod.POST:
                this["method"] = "POST";
                break;

            default:
                throw new Error("pass correct httpMethod: pass only GET or POST");

        }

        this["json"] = true;
        if (proxy !== undefined && proxy !== "") {
            this["agent"] = new HttpsProxyAgent(proxy);
        }
    }
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