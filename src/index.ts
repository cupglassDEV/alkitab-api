/// <reference types="node" />
/// <reference types="./index.d.ts" />
//import the types and the others
import type {Verse, Chapter } from '@daxplr/alkitab-api';
import {Book, bookConfig, Version} from '@daxplr/alkitab-api'
import {getChapter} from '@daxplr/alkitab-api'
// the source place

// end the source place
// other than interfaces, and types
var chapterMap
export default {
    getChapter: (version: Version, book: Book, chapter: number,verse: number):Chapter=>{
        const items = chapterMap[`${(version.split('-')[1])}:${book}:${chapter}`];
  
    },
    test: (a:any)=>{
       console.log(a)
    },
    bookConfig,Book,Version,Verse,Chapter
}