/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="node" />
//@ts-check
//import the types and the others
//@ts-check
import * as bookconf from './bookconfig';
import * as bookopt from './bookopts';
type type_getbook = keyof typeof bookconf;
import * as crypto from 'crypto';
// the source place
interface thisany { prototype: any; }
/**
 * typee
 * @since 1.0.0
 */
export namespace types {
        /**
 * types for each Verse
 * @since 1.0.0
 * 
 */
    export interface Verse {
        content: string;
        version: Version;
        verse: number;
    }
    export interface Chapter{
        verses: Verse[];
        toJoinedVerses?: ()=>string;
        chapter: number;
        book: Book;
        version: Version;
    }
        /**
 * Bibble version, including some Indonesian Ethnic's languages
 * @since 1.0.0
 * 
 */
    export enum Version {
        av='ab',
        net='net',
        nkjv='nkjv',
        amp='amp',
        esv='esv',
        niv='niv',
        bbe='bbe',
        tb='tb',
        jawa='jawa',
        sunda='sunda',
        toba='toba',
        // it should be makassar
        makassar='makasar',
        bali='bali',
        lampung='lampung',
        simalungun='simalungun',
        nias='nias',
        aceh='aceh',
        mentawai='mentawai',
        mamasa='mamasa',
        berik='berik',
        manggarai='manggarai',
        sabu='sabu',
        kupang='kupang',
        abun='abun',
        meyah='meyah',
        uma='uma',
        yawa='yawa',
        gorontalo='gorontalo',
        barantak='barantak',
        bambam='bambam',
        mongondow='mongondow',
        aralle='aralle',
        napu='napu',
        sangir='sangir',
        taa='taa',
        rote='rote',
        galela='galela',
        yali='yali',
        tabaru='tabaru',
        karo='karo',
    }
        /**
 * bibble book
 * @since 1.0.0
 * 
 */
export enum Book {
    samuel1='1Sa',
    samuel2="2Sa",
    ezra="Ezr",
    kings1='1Ra',
    kings2='2Ra',
    nehemiah='Neh',
    joshua="Yos",
    judges="Hak",
    ruth="Rut",
    chronicles1="1Ta",
    chronicles2="2Ta",
    esther="Est",
    job="Ayb",
    proverbs="Ams",
    psalms="Mzm",
    // whats this, im catholic
    ecclesiastes='Pen',
    johannes1='1Yo',
    johannes2='2Yo',
    isiah='Yes',
    jeremiah='Yer',
    lamentations='Rat',
    ezekiel='Yeh',
    genesis='Kej',
    exodus='Kel',
    leviticus='Ima',
    numbers='Bil',
    deuteuronomy='Ula',
    daniel='Dan',
    hosea='Hos',
    joel='Yoe',
    obadiah='Oba',
    nahum='Nah',
    zephaniah='Zef',
    jonah='Yun',
    amos='Amo',
    habakuk='Hab',
    haggai='Hag',
    zechariah='Zak',
    malachi='Mal',


    matthew='Mat',
    mark='Mar',
    luke='Luk',
    john='Yoh',
    acts='Kis',
    romans='Rom',
    corinthians1='1Ko',
    corinthians2='2Ko',
    tessalonians1='1Te',
    tessalonians2='2Te',
    peter1='1Pe',
    peter2='2Pe',
    john1='1Yo',
    john2='2Yo',
    john3='3Yo',
    timothy1='1Ti',
    timothy2='2Ti',
    galatians='Gal',
    ephesians='Efe',
    philippians='FIl',
    collosians='Kol',
    philemon='FIl',
    hebrews='Ibr',
    james='Yak',
    jude='Yud',
    revelation='Wah'
}
}
/**
 * main entrypoint
 * @since 1.0.0
 */
export namespace alkitabapi {
/**
 * get the chapter/s
 * @param book the book
 * @param version bibble version
 * @param chapter the chapter
 * @param verse1 starts to find the verses from the ```verse1```
 * @param verse2 optional, but you can use it if you want to search the verses untill ```verse2```
 * @param source optional, change the default source to the provided ts class source from 'bookconfig.ts'
 * @since 1.0.0
 */
//@ts-check
export async function getChapter(
    version: types.Version,
    book: types.Book,
    chapter: number,
    verse1:number,
    verse2?:number,
    source?:string
): Promise<types.Chapter>{
    
    //starts to check if any replacement requested
    return (await bookopt.__system_execfetchweb(version, book, chapter, [verse1, (verse2==undefined?verse1:verse2)]));
}

}
class main {
    constructor(){
        ((main as unknown) as thisany).prototype = alkitabapi;
        ((main as unknown) as thisany).prototype.types = types;
    }
}
/**
 * main module
 * @deprecated since ```1.0.1```. Please use the bracket one directly ```import {alkitabapi, types} from '@daxplrer/alkitabapi'```
 */
export {};