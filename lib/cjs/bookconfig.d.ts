import alkitabapi from "./index";
import { bookTemp } from "./bookopts";
export declare class defaultSrc implements bookTemp {
    cachemaporigin: number[];
    getfetch(version: alkitabapi.Version, book: string, chapter: number, verseNumber: [number, number]): Promise<alkitabapi.Chapter>;
    ignoreBooks: alkitabapi.Book[];
    replaceBookCodes: undefined;
}
