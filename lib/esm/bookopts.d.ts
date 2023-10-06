import { alkitabapi as types } from ".";
export declare const utils: {
    convertToBookEnum: (code: string, replacebookNavigator?: [[types.Book, string]]) => types.Book;
    convertToVersionEnum: (code: string, replacebookNavigator?: [[types.Version, string]]) => types.Version;
};
export declare class bookTemp {
    /**
*  @satisfies Do you want to make some books ignored and throws as error if someone was using your ignored books?
*/
    ignoreBooks: types.Book[] | undefined;
    /**
        * use this if your book code was diffrent for your provided fetchweb function,
        *  @public since 1.0.1,
        *  @param {Book} Book (the first index for the array) the book that you want to replace the code
        *  @param {string} string (the last index for the array) the code that you want to change for the Book param
        *  @satisfies Is the provided link dosent supports some codes? But, the content of the book are same as the provided one?
        */
    replaceBookCodes: [[types.Book, string]] | undefined;
    getfetch: (version: types.Version, book: string, chapter: number, verseNumber: [number, number]) => Promise<types.Chapter>;
}
export declare function __system_execfetchweb(version: types.Version, book: types.Book, chapter: number, verseNumber: [number, number], source?: string): Promise<types.Chapter>;
