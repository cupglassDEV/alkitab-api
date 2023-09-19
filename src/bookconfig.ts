import {Book, Chapter, Verse, Version } from "@daxplr/alkitab-api";
import { bookTemp } from "./bookopts";
import cheerio from "cheerio";
import axios from 'axios'
export class defaultSrc extends bookTemp{
    constructor(){
        super()
    }
    declare ignoreBooks: [Book.ecclesiastes];
    //@ts-check
    public async getweb(version: Version, book: string, chapter: number, verseNumber: number[]):Promise<Chapter>{
        const htmldata = (await axios.get(`http://alkitab.mobi/${version}/${book}/${chapter}`, {responseType:'document'})).data
        const html$ = cheerio.load(htmldata)
        // functions only on one instance, instead of the written index.js file (`[`${version}:${book}:${chapter}`]`), use `[verseNumber]`
        // so, yeah. u dont need to worry abt that
        var cachemaporigin:number[]
        var cachemap:Verse[]
        var ChapterExport:Chapter
        //@ts-ignore
        await html$('div').filter((i, el)=>{
        if ((html$(el).not('class'))&&(html$(el).not('align'))){
            if (html$(el).children('div').has('id')){
                //@ts-ignore
                var verseCount:number=0
                //@ts-ignore
                (html$(el).children('div')).children('p').filter((i1, el1)=>{
                  if (i1<2) return
                  // i love javascript, indexes always starts with the damn 0
                  if ((i1+1)%2==1){
                    verseCount++
                    cachemap[verseCount]
                  } else {
                    //@ts-ignore
                    cachemaporigin[verseCount] = html$(el1).val()
                    cachemap[verseCount]={
                        book: book,
                        //@ts-ignore
                        content: html$(el1).val(),
                        version: version,
                        chapter: chapter
                    }
                  }
                })
            }
        }
        })
        //@ts-ignore
        ChapterExport = {
            //@ts-ignore
            verses: (cachemap.filter((val, i2)=>{
                return !(i2<verseNumber[0])&&!(i2>(verseNumber.length===1?verseNumber[0]:verseNumber[1]))
            })),
            chapter: chapter,
            book: book,
            version: version
        }
        return ChapterExport
    }
}