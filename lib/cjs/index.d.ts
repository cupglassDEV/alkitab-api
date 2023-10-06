/** @deprecated since 1.0.4, please use ```alkitabapi``` instead */
export declare namespace types {
}
/**
 * main module. Deprecated in 1.0.1,
 * @since 1.0.0||>=1.0.4
 */
export declare namespace alkitabapi {
    interface Verse {
        content: string;
        version: Version;
        verse: number;
    }
    interface Chapter {
        verses: Verse[];
        toJoinedVerses?: () => string;
        chapter: number;
        book: Book;
        version: Version;
    }
    /**
* Bibble version, including some Indonesian Ethnic's languages
* @since 1.0.0
*
*/
    enum Version {
        av = "ab",
        net = "net",
        nkjv = "nkjv",
        amp = "amp",
        esv = "esv",
        niv = "niv",
        bbe = "bbe",
        tb = "tb",
        jawa = "jawa",
        sunda = "sunda",
        toba = "toba",
        makassar = "makasar",
        bali = "bali",
        lampung = "lampung",
        simalungun = "simalungun",
        nias = "nias",
        aceh = "aceh",
        mentawai = "mentawai",
        mamasa = "mamasa",
        berik = "berik",
        manggarai = "manggarai",
        sabu = "sabu",
        kupang = "kupang",
        abun = "abun",
        meyah = "meyah",
        uma = "uma",
        yawa = "yawa",
        gorontalo = "gorontalo",
        barantak = "barantak",
        bambam = "bambam",
        mongondow = "mongondow",
        aralle = "aralle",
        napu = "napu",
        sangir = "sangir",
        taa = "taa",
        rote = "rote",
        galela = "galela",
        yali = "yali",
        tabaru = "tabaru",
        karo = "karo"
    }
    /**
* bibble book
* @since 1.0.0
*
*/
    enum Book {
        samuel1 = "1Sa",
        samuel2 = "2Sa",
        ezra = "Ezr",
        kings1 = "1Ra",
        kings2 = "2Ra",
        nehemiah = "Neh",
        joshua = "Yos",
        judges = "Hak",
        ruth = "Rut",
        chronicles1 = "1Ta",
        chronicles2 = "2Ta",
        esther = "Est",
        job = "Ayb",
        proverbs = "Ams",
        psalms = "Mzm",
        ecclesiastes = "Pen",
        johannes1 = "1Yo",
        johannes2 = "2Yo",
        isiah = "Yes",
        jeremiah = "Yer",
        lamentations = "Rat",
        ezekiel = "Yeh",
        genesis = "Kej",
        exodus = "Kel",
        leviticus = "Ima",
        numbers = "Bil",
        deuteuronomy = "Ula",
        daniel = "Dan",
        hosea = "Hos",
        joel = "Yoe",
        obadiah = "Oba",
        nahum = "Nah",
        zephaniah = "Zef",
        jonah = "Yun",
        amos = "Amo",
        habakuk = "Hab",
        haggai = "Hag",
        zechariah = "Zak",
        malachi = "Mal",
        matthew = "Mat",
        mark = "Mar",
        luke = "Luk",
        john = "Yoh",
        acts = "Kis",
        romans = "Rom",
        corinthians1 = "1Ko",
        corinthians2 = "2Ko",
        tessalonians1 = "1Te",
        tessalonians2 = "2Te",
        peter1 = "1Pe",
        peter2 = "2Pe",
        john1 = "1Yo",
        john2 = "2Yo",
        john3 = "3Yo",
        timothy1 = "1Ti",
        timothy2 = "2Ti",
        galatians = "Gal",
        ephesians = "Efe",
        philippians = "FIl",
        collosians = "Kol",
        philemon = "FIl",
        hebrews = "Ibr",
        james = "Yak",
        jude = "Yud",
        revelation = "Wah"
    }
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
    function getChapter(version: Version, book: Book, chapter: number, verse1: number, verse2?: number, source?: string): Promise<Chapter>;
}
export default alkitabapi;
