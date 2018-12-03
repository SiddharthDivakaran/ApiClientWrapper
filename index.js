var requestParameter=require('./core/requestParamType');
var token=require('./authentication/Outh2TokenGenerator');
var option=require('./core/Options');
var apiclient=require('./core/apiRequest');

var Client=function()
{
  this.requestParameters=function()
  {
      return new requestParameter();
  }
  this.sendRequest=function()
  {
      return new apiclient();
  }
  this.getToken=function(url,clientId,clientSecret,proxy)
  {
      return token.getToken(url,clientId,clientSecret,proxy);
  }
  this.options=function()
  {
      return new option();
  }
}
module.exports=new Client();