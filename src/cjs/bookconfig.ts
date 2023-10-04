/* eslint-disable no-var */
import {types} from "./index";
import { bookTemp, utils } from "./bookopts";
import {load as cheerioload} from "cheerio";
import axios from 'axios';
export class defaultSrc implements bookTemp{
    cachemaporigin:number[]=[0];
    public async getfetch (version: types.Version, book: string, chapter: number, verseNumber: [number, number]):Promise<types.Chapter>{
        const htmldata = (await axios.get(`https://alkitab.mobi/${version}/${book}/${chapter}`, {responseType:'document'})).data;
        const html$ = cheerioload(htmldata);
        var cachemaporigin:number[]=[0];
        var cachemap:types.Verse[]=[];
        var ChapterExport:types.Chapter;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        await html$('div').filter((i, el)=>{
        if ((html$(el).not('class'))&&(html$(el).not('align'))){
            if (html$(el).children('div').has('id')){
                var verseCount=0;
                const texts = (html$(el).children('div')).children('p');
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                texts.each((i1, el1)=>{
                  if (i1<1) return;
                  // i love javascript, indexes always starts with the damn 0

                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                  html$(el1).children('span').each((i2, el2)=>{
                  if (i2===0){
                    cachemaporigin[verseCount] = parseInt(html$(el2).text());
                  } else {
                    cachemap[verseCount] =  {
                        content: html$(el2).text(),
                        version: version,
                        verse: cachemaporigin[verseCount]
                    };
                    verseCount++;
                  }
                });
                });
            }
        }
        });
        function compilleToFixedVerses(verses:types.Verse[], origin_i:number[]):[[number, string]]{
            var results:[[number, string]]=[[0, '']];
            verses.forEach((verse, i)=>{
                results.push([origin_i[i], verse.content]);
            });
            return results;
        }
        ChapterExport = {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            // TODO: implement the error for this
            verses: (cachemap.filter((verse,i)=>{
            const indexdetect = cachemaporigin[i];
            return ((!(indexdetect<verseNumber[0]))&&(!(indexdetect>verseNumber[1])));
        })),
            chapter: chapter,
            book: utils.convertToBookEnum(book),
            version: version,
            toJoinedVerses: function():string{
                var joincontent = compilleToFixedVerses(this.verses, cachemaporigin);
                var result : string[] = [''];
                joincontent.forEach((verse)=>{
                   result.push(`${verse[1]}\n`);
                });
                return (result.length<2?result.join(''):result.join('\n'));
            },
        };
        return ChapterExport;
    }
    ignoreBooks = [types.Book.ecclesiastes];
    replaceBookCodes = undefined;
}