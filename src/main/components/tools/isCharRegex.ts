/* eslint-disable no-useless-escape */
export default {
    hasWhitespace:function(char:string){
      return (new RegExp('\s')).test(char.charAt(0));
    },
    isAllowedForJSONNamings:function(char:string){
      return (new RegExp('\w|\$')).test(char.charAt(0));
    }
};