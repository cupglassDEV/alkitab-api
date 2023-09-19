declare module '@daxplr/alkitab-api' {
    /**
     * bibble versions, with Indonesian's local languages
     * @since 1.0.0
     * 
     */
    export enum Version {
        av='translationver-ab',
        net='translationver-net',
        nkjv='translationver-nkjv',
        amp='translationver-amp',
        esv='bookver-esv',
        niv='translationver-niv',
        bbe='translationver-bbe',
        tb='translationver-tb',
        jawa='translationver-jawa',
        sunda='translationver-sunda',
        toba='translationver-toba',
        // it should be makassar
        makassar='translationver-makasar',
        bali='translationver-bali',
        lampung='translationver-lampung',
        simalungun='translationver-simalungun',
        nias='translationver-nias',
        aceh='translationver-aceh',
        mentawai='translationver-mentawai',
        mamasa='translationver-mamasa',
        berik='translationver-berik',
        manggarai='translationver-manggarai',
        sabu='translationver-sabu',
        kupang='translationver-kupang',
        abun='translationver-abun',
        meyah='translationver-meyah',
        uma='translationver-uma',
        yawa='translationver-yawa',
        gorontalo='translationver-gorontalo',
        barantak='translationver-barantak',
        bambam='translationver-bambam',
        mongondow='translationver-mongondow',
        aralle='translationver-aralle',
        napu='translationver-napu',
        sangir='translationver-sangir',
        taa='translationver-taa',
        rote='translationver-rote',
        galela='translationver-galela',
        yali='translationver-yali',
        tabaru='translationver-tabaru',
        karo='translationver-yali',
    }
    class ALKITABAPIBookIgnoredError extends Error {
        constructor(book:Book[]){
            this.name = 'ALKITABAPI Book Ignored Error'
            this.message = `The provided source ignored ${book.length===1?'that book':'these books'}:\n\n${JSON.stringify(book)}`
            super()
        }
    }
    class ALKITABAPISourceOnlySupportsOneVerse extends Error {
        constructor(){
        this.name = 'ALKITABAPI Source Error'
        this.message = `The provided source only supports one verse`
        super()
        }
    }
        /**
     * book config, only used on ./index.ts
     * @since 1.0.0
     * 
     */
    export abstract class bookConfig {
        constructor(){
            /*
             they still didnt support types for {this} in class constructor,
             see https://github.com/microsoft/TypeScript/issues/5863
            
             so the variables will be outside of the constructor
             you only need to use super() inside the constructor()
             */
        }
                    /**
             *  @satisfies Do you want to make some books ignored and throws as error if someone was using your ignored books?
             */
        abstract ignoreBooks:Book[]
         /**
             *  @satisfies Do you want to add some missing books because the author misses some books?
             */
        abstract addBooks:string[]
         /**
             * use this if your book code was diffrent for your provided fetchweb function
             *  @param {Book} Book (the first index for the array) the book that you want to replace the code
             *  @param {string} string (the last index for the array) the code that you want to change for the Book param
             *  @satisfies Is the provided link dosent supports some codes but the content of the books are same as the provided one? 
             */
        abstract replaceBookCodes:[[Book, string]]|[Book, string]
         /**
             *  @satisfies Is the given link supports many verses? Or only one?
             */
        declare supportsManyVerses:boolean
        /**
         * DO NOT CHANGE THIS CODE
         */
        public __system_execfetchweb(version:Version, book:Book|String, chapter:number, verseNumber:number|number[]):Chapter{
            var isNumberArray:boolean = false
            var versealt:number[]
            if (typeof verseNumber!=='number') isNumberArray = true
            if (!this.supportsManyVerses&&isNumberArray) throw new ALKITABAPISourceOnlySupportsOneVerse()
            if (this.supportsManyVerses){
            if (!isNumberArray) versealt = [verseNumber]
            else versealt = verseNumber
            }
            if (this.ignoreBooks.includes(book)) throw new ALKITABAPIBookIgnoredError(book)
            return (await this.fetchweb(version, book.toString(), chapter, versealt))
        }
        /**
         * used to fetch with your provided url
         */
        protected fetchweb(version:Version, book:String, chapter:number, verseNumber:number[]):Chapter
    }
        /**
     * bibble book, outputted as the book codes (for https://alkitab.mobi/ (its the same as https://alkitab.sabda.org))
     * @since 1.0.0
     * 
     */
    export enum Book {
        samuel1='1Sa',
        samuel2="2Sa",
        ezra="Ezr",
        kings1='1Ra',
        kings2='2Ra',
        joel='Yoe',
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
    
    export interface Verse {
        content: string;
        book: Book;
        version: string;
        chapter: number;
        verse: number;
        order: number;
        type: string;
    };

    export interface Chapter{
        verses: Verse[];
        chapter: number;
        book: string;
        version: string;
    };
    /**
     * get the chapter/s
     * @since 1.0.0
     * @source https://alkitab.sabda.com
     */
    export function getChapter(
        version: Version,
        book: string,
        chapter: number,
        verse: number|number[]
    ): Chapter;
    export function test(
        a:any
    )
}
