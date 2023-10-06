import {alkitabapi as types} from ".";
import * as bookopts from './bookconfig';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface gapenting_thisany { getweb:any}
class ALKITABAPIBookIgnoredError extends Error {
    constructor(book: types.Book|types.Book[]) {
        super();
        this.name = 'ALKITABAPI Book Ignored Error';
        this.message = `The provided source ignored ${book.length === 1 ? 'this book' : 'these books'}:\n\n${JSON.stringify(book)}`;
    }
}
export const utils = {
    convertToBookEnum: function(code:string, replacebookNavigator?:[[types.Book, string]]):types.Book{
        // eslint-disable-next-line no-var
        var bookListAlt:[[types.Book, string]]=[[types.Book.genesis, '']];
        Object.values(types.Book).forEach((book1, i_)=>{
            bookListAlt[i_] = [book1, ((Object.values(types.Book))[i_])];
        });
        if (replacebookNavigator!=undefined){
        replacebookNavigator.forEach((arr)=>{ 
            bookListAlt[bookListAlt.indexOf(arr)] = arr;
        });
    }
        for (const book in bookListAlt){
           if (bookListAlt[book][1].includes(code)) return bookListAlt[book][0];
        }
        throw new ReferenceError(`book not found: ${code}`);
    },
    convertToVersionEnum: function(code:string, replacebookNavigator?:[[types.Version, string]]):types.Version{
        // eslint-disable-next-line no-var
        var bookListAlt:[[types.Version, string]]=[[types.Version.tb, '']];
        Object.values(types.Version).forEach((book1, i_)=>{
            bookListAlt[i_] = [book1, ((Object.values(types.Version))[i_])];
        });
        if (replacebookNavigator!=undefined){
        replacebookNavigator.forEach((arr)=>{ 
            bookListAlt[bookListAlt.indexOf(arr)] = arr;
        });
    }
        for (const book in bookListAlt){
           if (bookListAlt[book][1].includes(code)) return bookListAlt[book][0];
        }
        throw new ReferenceError(`version not found: ${code}`);
    },
    isInt16:function(num:number){
        try {
          const test = new Uint16Array(num);
          return true;
        } catch (err) {
            return false;
        }
    }
};
export class bookTemp {
        /*
         they still didnt support types for {this} in class constructor,
         see https://github.com/microsoft/TypeScript/issues/5863
        
         so the config variables will be outside of the constructor
         you only need to use super() inside of the constructor()
         */



                /**
         *  @satisfies Do you want to make some books ignored and throws as error if someone was using your ignored books?
         */
                declare ignoreBooks:types.Book[]|undefined;
                /**
                    * use this if your book code was diffrent for your provided fetchweb function,
                    *  @public since 1.0.1,
                    *  @param {Book} Book (the first index for the array) the book that you want to replace the code
                    *  @param {string} string (the last index for the array) the code that you want to change for the Book param
                    *  @satisfies Is the provided link dosent supports some codes? But, the content of the book are same as the provided one? 
                    */
               declare replaceBookCodes:[[types.Book, string]]|undefined;
    declare getfetch:(version: types.Version, book: string, chapter: number, verseNumber: [number, number])=>Promise<types.Chapter>;
}
export async function __system_execfetchweb(version: types.Version, book: types.Book, chapter: number, verseNumber: [number, number], source?:string): Promise<types.Chapter> {
    type type_getbook = keyof typeof bookopts;
    // eslint-disable-next-line no-var
    var usedefault=false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-var
    var initClass=(new bookopts.defaultSrc());
    try {
    initClass = new bookopts[(source==undefined?'defaultSrc':source) as type_getbook]();
    } catch(err){
    usedefault = true;
    initClass = new bookopts['defaultSrc'];
    }
    Object.freeze(usedefault);Object.freeze(initClass);
    // eslint-disable-next-line no-var
    var thiscls = initClass;
    
    // eslint-disable-next-line no-var
    var bookCodeAlt='';
    if (thiscls.replaceBookCodes!=undefined){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        thiscls.replaceBookCodes.forEach((value: [types.Book, string])=>{
           if (bookCodeAlt!=='') return;
           if (value[0].includes(book)){
               bookCodeAlt = (value[1])||('error');
           }
        });
    }
    if (thiscls.ignoreBooks!=undefined){
    if (thiscls.ignoreBooks.includes(book)) throw new ALKITABAPIBookIgnoredError(book);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (await thiscls.getfetch(version, book, chapter, verseNumber));
}