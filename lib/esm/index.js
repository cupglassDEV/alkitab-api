var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as bookopt from './bookopts';
/**
 * main module. Deprecated in 1.0.1,
 * @since 1.0.0||>=1.0.4
 */
export var alkitabapi;
(function (alkitabapi) {
    /**
* Bibble version, including some Indonesian Ethnic's languages
* @since 1.0.0
*
*/
    let Version;
    (function (Version) {
        Version["av"] = "ab";
        Version["net"] = "net";
        Version["nkjv"] = "nkjv";
        Version["amp"] = "amp";
        Version["esv"] = "esv";
        Version["niv"] = "niv";
        Version["bbe"] = "bbe";
        Version["tb"] = "tb";
        Version["jawa"] = "jawa";
        Version["sunda"] = "sunda";
        Version["toba"] = "toba";
        // it should be makassar
        Version["makassar"] = "makasar";
        Version["bali"] = "bali";
        Version["lampung"] = "lampung";
        Version["simalungun"] = "simalungun";
        Version["nias"] = "nias";
        Version["aceh"] = "aceh";
        Version["mentawai"] = "mentawai";
        Version["mamasa"] = "mamasa";
        Version["berik"] = "berik";
        Version["manggarai"] = "manggarai";
        Version["sabu"] = "sabu";
        Version["kupang"] = "kupang";
        Version["abun"] = "abun";
        Version["meyah"] = "meyah";
        Version["uma"] = "uma";
        Version["yawa"] = "yawa";
        Version["gorontalo"] = "gorontalo";
        Version["barantak"] = "barantak";
        Version["bambam"] = "bambam";
        Version["mongondow"] = "mongondow";
        Version["aralle"] = "aralle";
        Version["napu"] = "napu";
        Version["sangir"] = "sangir";
        Version["taa"] = "taa";
        Version["rote"] = "rote";
        Version["galela"] = "galela";
        Version["yali"] = "yali";
        Version["tabaru"] = "tabaru";
        Version["karo"] = "karo";
    })(Version = alkitabapi.Version || (alkitabapi.Version = {}));
    /**
* bibble book
* @since 1.0.0
*
*/
    let Book;
    (function (Book) {
        Book["samuel1"] = "1Sa";
        Book["samuel2"] = "2Sa";
        Book["ezra"] = "Ezr";
        Book["kings1"] = "1Ra";
        Book["kings2"] = "2Ra";
        Book["nehemiah"] = "Neh";
        Book["joshua"] = "Yos";
        Book["judges"] = "Hak";
        Book["ruth"] = "Rut";
        Book["chronicles1"] = "1Ta";
        Book["chronicles2"] = "2Ta";
        Book["esther"] = "Est";
        Book["job"] = "Ayb";
        Book["proverbs"] = "Ams";
        Book["psalms"] = "Mzm";
        // whats this, im catholic
        Book["ecclesiastes"] = "Pen";
        Book["johannes1"] = "1Yo";
        Book["johannes2"] = "2Yo";
        Book["isiah"] = "Yes";
        Book["jeremiah"] = "Yer";
        Book["lamentations"] = "Rat";
        Book["ezekiel"] = "Yeh";
        Book["genesis"] = "Kej";
        Book["exodus"] = "Kel";
        Book["leviticus"] = "Ima";
        Book["numbers"] = "Bil";
        Book["deuteuronomy"] = "Ula";
        Book["daniel"] = "Dan";
        Book["hosea"] = "Hos";
        Book["joel"] = "Yoe";
        Book["obadiah"] = "Oba";
        Book["nahum"] = "Nah";
        Book["zephaniah"] = "Zef";
        Book["jonah"] = "Yun";
        Book["amos"] = "Amo";
        Book["habakuk"] = "Hab";
        Book["haggai"] = "Hag";
        Book["zechariah"] = "Zak";
        Book["malachi"] = "Mal";
        Book["matthew"] = "Mat";
        Book["mark"] = "Mar";
        Book["luke"] = "Luk";
        Book["john"] = "Yoh";
        Book["acts"] = "Kis";
        Book["romans"] = "Rom";
        Book["corinthians1"] = "1Ko";
        Book["corinthians2"] = "2Ko";
        Book["tessalonians1"] = "1Te";
        Book["tessalonians2"] = "2Te";
        Book["peter1"] = "1Pe";
        Book["peter2"] = "2Pe";
        Book["john1"] = "1Yo";
        Book["john2"] = "2Yo";
        Book["john3"] = "3Yo";
        Book["timothy1"] = "1Ti";
        Book["timothy2"] = "2Ti";
        Book["galatians"] = "Gal";
        Book["ephesians"] = "Efe";
        Book["philippians"] = "FIl";
        Book["collosians"] = "Kol";
        Book["philemon"] = "FIl";
        Book["hebrews"] = "Ibr";
        Book["james"] = "Yak";
        Book["jude"] = "Yud";
        Book["revelation"] = "Wah";
    })(Book = alkitabapi.Book || (alkitabapi.Book = {}));
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
    function getChapter(version, book, chapter, verse1, verse2, source) {
        return __awaiter(this, void 0, void 0, function* () {
            //starts to check if any replacement requested
            return (yield bookopt.__system_execfetchweb(version, book, chapter, [verse1, (verse2 == undefined ? verse1 : verse2)]));
        });
    }
    alkitabapi.getChapter = getChapter;
})(alkitabapi || (alkitabapi = {}));
export default alkitabapi;
//# sourceMappingURL=index.js.map