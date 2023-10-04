[@sonnylazuardi](https://github.com/sonnylazuardi)'s [alkitab-api](https://github.com/sonnylazuardi/alkitab-api), as a module

this is a hybrid package, so you can use it your in CJS and ESM based project

also Typescript types included in this module
# Setup
Install the package by executing:
```sh
npm install @daxplrer/alkitabapi
```

Then try to run ```getChapters```
```ts
import {alkitabapi, types} from '@daxplrer/alkitabapi'
await alkitabapi.getChapter(types.Version.tb, types.Book.proverbs, 12, 21);
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
# Known bugs
--
# Documentation
coming soon, for now i made the [JSDOC](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) too for the replacement of it