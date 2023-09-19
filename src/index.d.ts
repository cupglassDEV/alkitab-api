

declare module '@daxplr/alkitab-api' {
    /**
     * bibble versions, with Indonesian's local languages
     * @since 1.0.0
     * 
     */
    export enum Version {
        av,
        net,
        nkjv,
        amp,
        esv,
        niv,
        bbe,
        tb,
        jawa,
        sunda,
        toba,
        // 
        makasar,
        bali,
        lampung,
        simalungun,
        nias,
        aceh,
        mentawai,
        mamasa,
        berik,
        manggarai,
        sabu,
        kupang,
        abun,
        meyah,
        uma,
        yawa,
        gorontalo,
        barantak,
        bambam,
        mongondow,
        aralle,
        napu,
        sangir,
        taa,
        rote,
        galela,
        yali,
        tabaru,
        karo,
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
        ecclesiastes='Pen'
    }
    export type Verse = {
        content: string;
        book: Book;
        version: string;
        chapter: number;
        verse: number;
        order: number;
        type: string;
    };

    export type Chapter = {
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
        verse: number
    ): Chapter;
}
