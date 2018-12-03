var request = require('request-promise')

var getResponse = function () {
    /**
     * 
     * @param {option option object containing service request parameters like url,header,htpMethod type etc...}  
     */
    this.serviceResponse = function (option) {
        return request(option, function (error, response, body) {
            if (error) {
                return console.log("Error: ", error);
            }
            else if (!error && response.statusCode == 200) {
                return body;
            }
        })
    }
}
module.exports = getResponse;