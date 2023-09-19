import alkitabapi from './src/index'
console.log(await alkitabapi.getChapter(alkitabapi.Version.tb, alkitabapi.Book.amos, 1, 4))