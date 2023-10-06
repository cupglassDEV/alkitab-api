var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { alkitabapi as types } from ".";
import * as bookopts from './bookconfig';
class ALKITABAPIBookIgnoredError extends Error {
    constructor(book) {
        super();
        this.name = 'ALKITABAPI Book Ignored Error';
        this.message = `The provided source ignored ${book.length === 1 ? 'this book' : 'these books'}:\n\n${JSON.stringify(book)}`;
    }
}
export const utils = {
    convertToBookEnum: function (code, replacebookNavigator) {
        // eslint-disable-next-line no-var
        var bookListAlt = [[types.Book.genesis, '']];
        Object.values(types.Book).forEach((book1, i_) => {
            bookListAlt[i_] = [book1, ((Object.values(types.Book))[i_])];
        });
        if (replacebookNavigator != undefined) {
            replacebookNavigator.forEach((arr) => {
                bookListAlt[bookListAlt.indexOf(arr)] = arr;
            });
        }
        for (const book in bookListAlt) {
            if (bookListAlt[book][1].includes(code))
                return bookListAlt[book][0];
        }
        throw new ReferenceError(`book not found: ${code}`);
    },
    convertToVersionEnum: function (code, replacebookNavigator) {
        // eslint-disable-next-line no-var
        var bookListAlt = [[types.Version.tb, '']];
        Object.values(types.Version).forEach((book1, i_) => {
            bookListAlt[i_] = [book1, ((Object.values(types.Version))[i_])];
        });
        if (replacebookNavigator != undefined) {
            replacebookNavigator.forEach((arr) => {
                bookListAlt[bookListAlt.indexOf(arr)] = arr;
            });
        }
        for (const book in bookListAlt) {
            if (bookListAlt[book][1].includes(code))
                return bookListAlt[book][0];
        }
        throw new ReferenceError(`version not found: ${code}`);
    }
};
export class bookTemp {
}
export function __system_execfetchweb(version, book, chapter, verseNumber, source) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line no-var
        var usedefault = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-var
        var initClass = (new bookopts.defaultSrc());
        try {
            initClass = new bookopts[(source == undefined ? 'defaultSrc' : source)]();
        }
        catch (err) {
            usedefault = true;
            initClass = new bookopts['defaultSrc'];
        }
        Object.freeze(usedefault);
        Object.freeze(initClass);
        // eslint-disable-next-line no-var
        var thiscls = initClass;
        // eslint-disable-next-line no-var
        var bookCodeAlt = '';
        if (thiscls.replaceBookCodes != undefined) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            thiscls.replaceBookCodes.forEach((value) => {
                if (bookCodeAlt !== '')
                    return;
                if (value[0].includes(book)) {
                    bookCodeAlt = (value[1]) || ('error');
                }
            });
        }
        if (thiscls.ignoreBooks != undefined) {
            if (thiscls.ignoreBooks.includes(book))
                throw new ALKITABAPIBookIgnoredError(book);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (yield thiscls.getfetch(version, book, chapter, verseNumber));
    });
}
//# sourceMappingURL=bookopts.js.map