"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__system_execfetchweb = exports.bookTemp = exports.utils = void 0;
const _1 = require(".");
const bookopts = __importStar(require("./bookconfig"));
class ALKITABAPIBookIgnoredError extends Error {
    constructor(book) {
        super();
        this.name = 'ALKITABAPI Book Ignored Error';
        this.message = `The provided source ignored ${book.length === 1 ? 'this book' : 'these books'}:\n\n${JSON.stringify(book)}`;
    }
}
exports.utils = {
    convertToBookEnum: function (code, replacebookNavigator) {
        // eslint-disable-next-line no-var
        var bookListAlt = [[_1.alkitabapi.Book.genesis, '']];
        Object.values(_1.alkitabapi.Book).forEach((book1, i_) => {
            bookListAlt[i_] = [book1, ((Object.values(_1.alkitabapi.Book))[i_])];
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
        var bookListAlt = [[_1.alkitabapi.Version.tb, '']];
        Object.values(_1.alkitabapi.Version).forEach((book1, i_) => {
            bookListAlt[i_] = [book1, ((Object.values(_1.alkitabapi.Version))[i_])];
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
class bookTemp {
}
exports.bookTemp = bookTemp;
function __system_execfetchweb(version, book, chapter, verseNumber, source) {
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
exports.__system_execfetchweb = __system_execfetchweb;
//# sourceMappingURL=bookopts.js.map