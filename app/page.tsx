import View from '../components/view'

import { client } from '../libs/client';

export default async function Home() {
  const cms_response = await client
    .get({
        endpoint: 'news',
    })

  //const cms_response = await fetchStaticData()
  return (
    <View cms_response={cms_response}  />
  );
};