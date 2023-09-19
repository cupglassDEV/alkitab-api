import { bookConfig } from "@daxplr/alkitab-api";
class ALKITABAPIBookIgnoredError extends Error {
    constructor(book) {
        super();
        this.name = 'ALKITABAPI Book Ignored Error';
        this.message = `The provided source ignored ${book.length === 1 ? 'that book' : 'these books'}:\n\n${JSON.stringify(book)}`;
    }
}
export class bookTemp extends bookConfig {
    async __system_execfetchweb(version, book, chapter, verseNumber) {
        var isNumberArray = false;
        var versealt;
        var bookalt;
        if (typeof verseNumber !== 'number')
            isNumberArray = true;
        //@ts-ignore
        if (!isNumberArray)
            versealt = [verseNumber];
        //@ts-ignore
        else
            versealt = verseNumber;
        if (this.ignoreBooks.includes(book))
            throw new ALKITABAPIBookIgnoredError(book);
        return (await this['getweb'](version, book, chapter, versealt));
    }
}
