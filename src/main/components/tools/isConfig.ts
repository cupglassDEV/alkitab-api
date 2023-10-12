import type {CompillerOption} from '../module/processor';
export default {
isConfigIsntFalsy:function(config:Partial<CompillerOption>|CompillerOption, configname:keyof CompillerOption, nullcheckEnable:Partial<boolean>=true):boolean{
    const configdefined = !(config == undefined);
    if (configdefined) {
       if (config[configname]!=undefined){
        return false;
       } else {
        if (config[configname] == false) {
            return false;
        } else if (nullcheckEnable&&config[configname]==null) {
            return false;
        } else {
            return true;
        }
       }
    } else {
       return false;
    }
    },
isConfigIsntUndefined:function(config:Partial<CompillerOption>|CompillerOption, configname:keyof CompillerOption, nullcheckEnable:Partial<boolean>=true):boolean{
        const configdefined = !(config == undefined);
        if (configdefined) {
           if (config[configname]!=undefined){
            return false;
           } else {
            if (nullcheckEnable&&config[configname]==null) {
                return false;
            } else {
                return true;
            }
           }
        } else {
           return false;
        }
    }
};