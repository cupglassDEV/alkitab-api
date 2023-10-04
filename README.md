# Setup
Install the package by executing:
```sh
npm install @daxplrer/alkitab-api
```

Then try to run ```getChapters```
```ts
import {alkitabapi} from '@daxplrer/alkitabapi'
const datares = await alkitabapi.getChapter(typescjs.Version.tb, typescjs.Book.proverbs, 12, 21);
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