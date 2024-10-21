import View from '../components/view'

import { client } from '../libs/client';

import { rawNewsList, rawNewsCategoryList} from '../types/news';


export default async function Home() {
  const news_response = await client
    .getList({
        endpoint: 'news',
        queries: {limit: 10,}
    })
    .catch((err) => console.error(err));


    // fix me!
    let news_list: rawNewsList = {contents: [], totalCount: 0, offset: 0, limit: 0};

    if (news_response) {
      news_list = news_response;
    }

    const categories_response = await client
    .get({
        endpoint: 'newscategory',
    })
    .catch((err) => console.error(err));

    let category_list: rawNewsCategoryList = {contents: [], totalCount: 0, offset: 0, limit: 0};

    if (categories_response) {
      category_list = categories_response;
    }


  //const cms_response = await fetchStaticData()
  return (
    <View news_list={news_list} news_category={category_list} />
  );
};