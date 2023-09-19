const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cheerio = require('cheerio');
const axios = require('axios');
const port = process.env.PORT || 3000;

let chapterMap = {};

const getChapters = (version, book, chapter, verseNumber) => {
  const items = chapterMap[`${version}:${book}:${chapter}`];
  if (items && items.length) {
    let result = items;
    if (verseNumber) {
      result = items.filter(item => item.verse === verseNumber);
    }
    return Promise.resolve({
      verses: result,
      book,
      chapter,
      version,
    });
  } else {
    return axios.get(`http://alkitab.mobi/${version}/${book}/${chapter}`).then(({ data }) => {
      let $ = cheerio.load(data);
      let items = [];
      let lastVerse = 0;
      $('p').filter((i, el) => {
        let data = $(el);
        let content = data
          .find('[data-begin]')
          .first()
          .text();
        let title = data
          .find('.paragraphtitle')
          .first()
          .text();
        let verse = data
          .find('.reftext')
          .children()
          .first()
          .text();
        let order = i;
        let type = null;
        let item = {};

        if (!verse) {
          verse = 0;
        } else {
          verse = parseInt(verse, 10);
        }

        if (!title && !content) {
          data.find('.reftext').remove();
          content = data.text();
        }

        if (title) {
          type = 'title';
          content = title;
          verse = lastVerse + 1;
        } else if (content) {
          type = 'content';
          lastVerse = verse;
        }

        if (data.attr('hidden') === 'hidden' || data.hasClass('loading') || data.hasClass('error')) {
          type = null;
        }

        if (type) {
          item = {
            content,
            type,
            verse,
            book,
            chapter,
            version,
            order,
          };
          items.push(item);
        }
        return item;
      });
      chapterMap[`${version}:${book}:${chapter}`] = items;
      let result = items;
      if (verseNumber) {
        result = items.filter(item => item.verse === verseNumber);
      }
      return {
        verses: result,
        book,
        chapter,
        version,
      };
    });
  }
};


const resolvers = {
  Query: {
    passages: (root, args, context) => {
      return getChapters(args.version, args.book, args.chapter, args.verse);
    },
  },
};

function context(headers, secrets) {
  return {
    headers,
    secrets,
  };
}


// Source: Alkitab Mobile SABDA http://alkitab.mobi/
