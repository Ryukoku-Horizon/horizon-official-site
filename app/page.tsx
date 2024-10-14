import View from '../components/view'

import { client } from '../libs/client';

export default async function Home() {
  const news_list = await client
    .getList({
        endpoint: 'news',
        queries: {limit: 10,}
    })
    .catch((err) => console.error(err));

  //const cms_response = await fetchStaticData()
  return (
    <View news_list={news_list}  />
  );
};