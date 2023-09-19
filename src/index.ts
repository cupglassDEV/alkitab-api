/// <reference types="node" />
/// <reference types="./index.d.ts" />
//import the types and the others
import type {Verse, Chapter} from '@daxplr/alkitab-api';
import {Book, bookConfig, Version} from '@daxplr/alkitab-api'
import {getChapter} from '@daxplr/alkitab-api'
import * as bookopts from './bookconfig'
// the source place

// end the source place
// other than interfaces, and types
var chapterMap
export default {
    getChapter: async (version: Version, book: Book, chapter: number,verse: number|number[], source?:string):Promise<Chapter>=>{
        var usedefault:boolean=false
        var initClass:any
        try {
        //@ts-ignore
        initClass = new bookopts[source]
        //@ts-ignore
        } catch(err){
        usedefault = true
        initClass = new bookopts['defaultSrc']
        }
        Object.freeze(usedefault);Object.freeze(initClass)
        //starts to check if any replacement requested
        return (await initClass.__system_execfetchweb(version, book, chapter, verse))

    },
    test: (a:any)=>{
       console.log(a)
    },
    bookConfig,Book,Version,
}
export type {Verse, Chapter}