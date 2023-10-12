[@sonnylazuardi](https://github.com/sonnylazuardi)'s [alkitab-api](https://github.com/sonnylazuardi/alkitab-api), as a module
# Setup
Install the package by executing:
```sh
npm install @daxplrer/alkitabapi
```

Then try to run ```getChapters```
```ts
import alkitabapi from '@daxplrer/alkitabapi'
await alkitabapi.getChapter(alkitabapi.Version.tb, alkitabapi.Book.proverbs, 12, 21);
```

The results would be like this:
```ts
    {
      verses: [
        {
          content: 'Orang benar tidak akan ditimpa oleh bencana apapun, tetapi orang fasik akan senantiasa celaka.', 
          version: 'tb',
          verse: 21
        }
      ],
      chapter: 12,
      book: 'Ams',
      version: 'tb',
      toJoinedVerses: [Function: toJoinedVerses]
    }
```
# Updates
- the ```types``` and ```alkitabapi``` namespace was merged into one namespace (```alkitabapi```)
- default exports are supported now
- some useless code (in the internal) was removed
# Known bugs
--
# Documentation
coming soon, for now i made the [JSDOC](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) too for the replacement of it