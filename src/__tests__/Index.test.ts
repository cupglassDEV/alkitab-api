import { alkitabapi as apicjs, types as typescjs } from '../cjs/index';
test('alkitabapi', async () => {
  async function runner():Promise<string>{
    const datares = await apicjs.getChapter(typescjs.Version.tb, typescjs.Book.proverbs, 12, 21);
    if (datares.toJoinedVerses!=undefined) {
      return datares.toJoinedVerses();
    }
    else throw new Error('fail');
  }
  expect(await runner()).toContain('Orang benar tidak akan ditimpa oleh bencana apapun, tetapi orang fasik akan senantiasa celaka.');
});