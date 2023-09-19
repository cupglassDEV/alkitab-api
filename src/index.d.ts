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
        /**
     * book config, only used on ./index.ts
     * @since 1.0.0
     * 
     */
    export class bookConfig {
            /*
             they still didnt support types for {this} in class constructor,
             see https://github.com/microsoft/TypeScript/issues/5863
            
             so the config variables will be outside of the constructor
             you only need to use super() inside of the constructor()
             */



                    /**
             *  @satisfies Do you want to make some books ignored and throws as error if someone was using your ignored books?
             */
        declare ignoreBooks:Book[]
         /**
             * use this if your book code was diffrent for your provided fetchweb function
             *  @private unused for now on, implemented later on 1.0.2
             *  @param {Book} Book (the first index for the array) the book that you want to replace the code
             *  @param {string} string (the last index for the array) the code that you want to change for the Book param
             *  @satisfies Is the provided link dosent supports some codes? But, the content of the book are same as the provided one? 
             */
        declare replaceBookCodes:[[Book, string]]|[Book, string]
        /**
         * DO NOT CHANGE THIS CODE
         */
        public __system_execfetchweb(version:Version, book:Book, chapter:number, verseNumber:number|number[]):Promise<Chapter>
        /**
         * used to fetch with your provided url
         */
        public fetchweb(version:Version, book:String, chapter:number, verseNumber:number[]):Chapter
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
        book: Book|string;
        version: string;
        chapter: number;
        verse: number;
        type: string;
    }

    export interface Chapter{
        verses: Verse[];
        chapter: number;
        book: string;
        version: string;
    }

    /**
     * get the chapter/s
     * @since 1.0.0
     * @source https://alkitab.sabda.com
     */
    //@ts-check
    export function getChapter(
        version: Version,
        book: string,
        chapter: number,
        verse: number|number[]
    ): Promise<Chapter>;
    export function test(
        a:any
    )
}
