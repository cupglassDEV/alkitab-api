import { alkitabapi as apicjs } from '../cjs-and-esm/index';
test('alkitabapi', async () => {
  async function runner():Promise<string>{
    const datares = await apicjs.getChapter(apicjs.Version.tb, apicjs.Book.proverbs, 12, 21);
    console.log(datares);
    if (datares.toJoinedVerses!==undefined) {
      return datares.toJoinedVerses();
    }
    else throw new Error('fail');
  }
  expect(await runner()).toContain('Orang benar tidak akan ditimpa oleh bencana apapun, tetapi orang fasik akan senantiasa celaka.');
});