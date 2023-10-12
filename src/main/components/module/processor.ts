/* eslint-disable no-console */
import capturetime from "../tools/capturetime";
interface CompillerOption {
setModulesGetterThread:Partial<number>,
forceClearCache:Partial<boolean>
verbose:Partial<boolean>
}
import isConfig from '../tools/isConfig';
// eslint-disable-next-line no-var
var isConfigIsntFalsy = isConfig.isConfigIsntFalsy; var isConfigIsntUndefined = isConfig.isConfigIsntUndefined;
class main {
    private isModuleIsInMain = true;
    private isModuleStillTargetsMain = true;
    private session = 0;
    private moduleindexer = 0;
    private modules = {}; 
    store(code:string){
        this.modules['session'+this.session+'-'+this.moduleindexer] = code;
        this.moduleindexer++;
    }
    get(moduleName:string){
        return this.modules['session'+''+moduleName];
    }
    run(code:string, option:Partial<CompillerOption>):object{
        const timecache = capturetime();

        if (isConfigIsntFalsy(option, 'verbose')) {
            const moduletargetinfo = this.isModuleIsInMain?'Loading main module':this.isModuleStillTargetsMain?'Loading module 1 from main module entry':'Loading other modules from module '+this.moduleindexer;
            console.log(moduletargetinfo);
        }
        if (!this.isModuleIsInMain&&this.isModuleStillTargetsMain){
            this.isModuleStillTargetsMain = false;
        }
        timecache.getProcessedTime();
    }
    runToJsonString(code:string, option:Partial<CompillerOption>):string{

    }
}
export type {CompillerOption};
export default main;