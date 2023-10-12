/*
quick access for your .jsons / .json_s file to process
*/
import process_module from './components/module/processor';
import type {CompillerOption} from './components/module/processor';
export default {
    runToObject: function(code:string, option:Partial<CompillerOption>){
        return (new process_module()).run(code, option);
    },
    run: function(code:string, option:Partial<CompillerOption>){
        return (new process_module()).runToJsonString(code, option);
    },
}