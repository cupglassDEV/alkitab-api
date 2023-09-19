import { Book, Chapter, Verse, Version, bookConfig } from "@daxplr/alkitab-api";
class ALKITABAPIBookIgnoredError extends Error {
    constructor(book: Book|Book[]) {
        super()
        this.name = 'ALKITABAPI Book Ignored Error'
        this.message = `The provided source ignored ${book.length === 1 ? 'that book' : 'these books'}:\n\n${JSON.stringify(book)}`
    }
}
export class bookTemp extends bookConfig {
    declare ignoreBooks: Book[];
    declare replaceBookCodes:[[Book, string]]|[Book, string]
    public async __system_execfetchweb(version: Version, book: Book, chapter: number, verseNumber: number | number[]): Promise<Chapter> {
        var isNumberArray: boolean = false
        var versealt: number[]
        var bookalt: string
        if (typeof verseNumber !== 'number') isNumberArray = true
        //@ts-ignore
        if (!isNumberArray) versealt = [verseNumber]
        //@ts-ignore
        else versealt = verseNumber
        if (this.ignoreBooks.includes(book)) throw new ALKITABAPIBookIgnoredError(book)
        return (await this['fetchweb'](version, book, chapter, versealt))
    }
}