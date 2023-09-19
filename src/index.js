import { Book, bookConfig, Version } from '@daxplr/alkitab-api';
import * as bookopts from './bookconfig';
// the source place
// end the source place
// other than interfaces, and types
var chapterMap;
export default {
    getChapter: async (version, book, chapter, verse, source) => {
        var usedefault = false;
        var initClass;
        try {
            //@ts-ignore
            initClass = new bookopts[source];
            //@ts-ignore
        }
        catch (err) {
            usedefault = true;
            initClass = new bookopts['defaultSrc'];
        }
        Object.freeze(usedefault);
        Object.freeze(initClass);
        //starts to check if any replacement requested
        return (await initClass.__system_execfetchweb(version, book, chapter, verse));
    },
    test: (a) => {
        console.log(a);
    },
    bookConfig, Book, Version,
};
