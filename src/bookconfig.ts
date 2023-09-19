import {Book, Chapter, Version, bookConfig } from "@daxplr/alkitab-api";
export abstract class defaultSrc extends bookConfig{
    constructor(){
        super()
    }
    supportsManyVerses=true;
    protected fetchweb(version: Version, book: String | Book, chapter: number, verseNumber: number[]):Chapter{
        
    }
}