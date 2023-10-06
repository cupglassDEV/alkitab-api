var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable no-var */
import alkitabapi from "./index";
import { utils } from "./bookopts";
import { load as cheerioload } from "cheerio";
import axios from 'axios';
export class defaultSrc {
    constructor() {
        this.cachemaporigin = [0];
        this.ignoreBooks = [alkitabapi.Book.ecclesiastes];
        this.replaceBookCodes = undefined;
    }
    getfetch(version, book, chapter, verseNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const htmldata = (yield axios.get(`https://alkitab.mobi/${version}/${book}/${chapter}`, { responseType: 'document' })).data;
            const html$ = cheerioload(htmldata);
            var cachemaporigin = [0];
            var cachemap = [];
            var ChapterExport;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            yield html$('div').filter((i, el) => {
                if ((html$(el).not('class')) && (html$(el).not('align'))) {
                    if (html$(el).children('div').has('id')) {
                        var verseCount = 0;
                        const texts = (html$(el).children('div')).children('p');
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        texts.each((i1, el1) => {
                            if (i1 < 1)
                                return;
                            // i love javascript, indexes always starts with the damn 0
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-ignore
                            html$(el1).children('span').each((i2, el2) => {
                                if (i2 === 0) {
                                    cachemaporigin[verseCount] = parseInt(html$(el2).text());
                                }
                                else {
                                    cachemap[verseCount] = {
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
            function compilleToFixedVerses(verses, origin_i) {
                var results = [[0, '']];
                verses.forEach((verse, i) => {
                    results.push([origin_i[i], verse.content]);
                });
                return results;
            }
            ChapterExport = {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                // TODO: implement the error for this
                verses: (cachemap.filter((verse, i) => {
                    const indexdetect = cachemaporigin[i];
                    return ((!(indexdetect < verseNumber[0])) && (!(indexdetect > verseNumber[1])));
                })),
                chapter: chapter,
                book: utils.convertToBookEnum(book),
                version: version,
                toJoinedVerses: function () {
                    var joincontent = compilleToFixedVerses(this.verses, cachemaporigin);
                    var result = [''];
                    joincontent.forEach((verse) => {
                        result.push(`${verse[1]}\n`);
                    });
                    return (result.length < 2 ? result.join('') : result.join('\n'));
                },
            };
            return ChapterExport;
        });
    }
}
//# sourceMappingURL=bookconfig.js.map