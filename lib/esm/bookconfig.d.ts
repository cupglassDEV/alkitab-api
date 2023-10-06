import { types } from "./index";
import { bookTemp } from "./bookopts";
export declare class defaultSrc implements bookTemp {
    cachemaporigin: number[];
    getfetch(version: types.Version, book: string, chapter: number, verseNumber: [number, number]): Promise<types.Chapter>;
    ignoreBooks: types.Book[];
    replaceBookCodes: undefined;
}
