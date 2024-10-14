import View from '../components/view'

import { client } from '../libs/client';

import { NewsList } from '../types/news';


export default async function Home() {
  const response = await client
    .getList({
        endpoint: 'news',
        queries: {limit: 10,}
    })
    .catch((err) => console.error(err));


    // fix me!
    let news_list: NewsList = {contents: [], totalCount: 0, offset: 0, limit: 0};

    if (response) {
      news_list = response;
    }


  //const cms_response = await fetchStaticData()
  return (
    <View news_list={news_list}  />
  );
};