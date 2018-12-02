var requestParam=function()
{
}
/**
 * 
 * @param {key key to be set for request parameter type e.g for header key can be "Authentication"} 
 * @param {value value to be set for the given key}  
 */
requestParam.prototype.setKeyValue=function(key,value)
{
  this[key]=value;
}
/**
 * get the key value pair set using the setKeyValue method
 */
requestParam.prototype.getKeyValuePair=function()
{
    keys=Object.keys(this);
    value=Object.values(this);
    return keys.reduce(function(map,key,index){
        map[key]=value[index];
        return map;
    },{});
}
module.exports=requestParam;