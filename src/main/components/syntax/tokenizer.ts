/* eslint-disable no-var */
// this tokenizer already includes the lexer and some of the parsers

//Currently the tokenizer dosent supports all-at-one line
import isChar from "../tools/isCharRegex";

export default function(codeplain:string){
    const code = codeplain.split('\n');
    var coderesult:object|[];
    //core:

    //tokenizer pos
    var linepos = 0;
    var charpos = 0;
    var collectedtags = '';

    //symbols status:

    //some symbols
    var objBracketStatus:'open'|'close'|'idle'='idle'; var arrBracketStatus:'open'|'close'|'idle'='idle';
    var jsParseStatus:'open'|'close'|'idle'='idle';

    // for quoted names
    var quotMarkStatus:'open'|'close'|'idle'='idle'; var aposStatus:'open'|'close'|'idle'='idle';

    // tag related variables
    var objTagStatus:'open'|'close'|'idle'='idle';
    
    // modes
    var modeNoJSFunc = false;

    //errors 
    class JSON_SParseError extends Error {
        constructor(errorcode:string, errordesc:string){
            super();
            this.message = 'Error throwed: `\n\n'+errorcode+': '+errordesc+'\n\n`\nAt char '+(charpos+1)+' in line: '+(linepos+1);
            this.name = 'JSON_S Parse Error';
        }
    }
    // function a(){
    // // sadly you cant use `using` keyword in eslint plugin for vsc (But, in the `eslint` package itself, it is supported. Idk why)
    // // using a
    // }
    for (const line of code){
        for (charpos=0; charpos<line.length; charpos++){
            
            const currentchar = line.charAt(charpos);
            // the code requires to use {} or [], just like the normal json
            if (objBracketStatus==='idle'&&arrBracketStatus==='idle') {
                if (isChar.hasWhitespace(currentchar)) continue;
                if (currentchar==='{') {
                    objBracketStatus = 'open';
                } else if (currentchar==='['){
                    arrBracketStatus = 'open';
                }
                continue;
            }
            if (objBracketStatus==='open'){
                if (isChar.hasWhitespace(currentchar)) continue;

                if (currentchar==="'"){
                    aposStatus = 'open';
                } else if (currentchar==='"'){
                    quotMarkStatus = 'open';
                }
            } 
        }
        linepos+=1;
    }
}