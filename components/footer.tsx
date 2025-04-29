'use client'

import { useState } from 'react';

import { rawNewsList, rawNewsCategoryList, News, NewsCategory } from '../types/news'

import { filteringNewsByCategory } from '../features/filteringNewsByCategory'

import parse from 'html-react-parser';

export default function Footer({ news_list, news_category }: {
    news_list: rawNewsList;
    news_category: rawNewsCategoryList;
}) {
    const [NewsCategories, setNewsCategories] = useState<NewsCategory[]>(
        news_category.contents.map((category) => ({
            id: category.id,
            title: category.category,
            selected: false,
        }))
    );

    const [filteringCategory, setFilteringCategory] = useState<string[]>([]);

    const [newsList, setNewsList] = useState<News[]>(
        news_list.contents.map((news) => ({
            id: news.id,
            title: news.title,
            date: news.date,
            categories: news.category?.map((category) => category.category) || [],
            main_content: news.main_content,
            main_image: news.main_image,
        }))
    );

    const filterdNews = filteringNewsByCategory({ news: newsList, category: filteringCategory })

    const handleCategoryClick = (categoryId: string, categoryTitle: string) => {
        setFilteringCategory(prevItems => {
            // すでにアイテムが存在する場合は削除
            if (prevItems.includes(categoryTitle)) {
                return prevItems.filter(item => item !== categoryTitle);
            }
            // 存在しない場合は追加
            return [...prevItems, categoryTitle];
        });

        setNewsCategories(categories =>
            categories.map(category =>
                category.id === categoryId
                    ? { ...category, selected: !category.selected }
                    : category
            )
        );
    };

    const [selectedNews, setSelectedNews] = useState<News | null>(null);

    const handleNewsClick = (newsId: string) => {
        const selectedNews = newsList.find(news => news.id === newsId);
        if (!selectedNews) return;
        setSelectedNews(selectedNews);
    }

    return (
        <section id="main" className="bg-white relative md:p-8 p-5 h-[100vh] flex flex-col">
            <div className='md:flex md:flex-row'>
                <div className='font-rubik md:text-4xl flex md:flex-col flex-row'>
                    <div className='pb-10 mx-5'>
                        NEWS
                    </div>
                    <div className='pb-10 mx-5'>
                        PRODUCT
                    </div>
                    <div className='mx-5'>
                        EVENT
                    </div>
                </div>
                <div className='grow-0 md:pl-10'>
                    <div className='font-kanit md:text-lg text-sm flex-row flex md:ml-10 mb-3'>
                        {[...NewsCategories].map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryClick(category.id, category.title)}
                                className={`md:px-5 px-3 rounded-2xl m-1 border-2 border-gray-700 ${category.selected ? 'text-white bg-gray-700' : ''}`}
                            >
                                {"#" + category.title}
                            </button>
                        ))}
                    </div>

                    <ul className='flex flex-row overflow-x-auto overflow-y-hidden'>
                        {[...filterdNews].map((content) => (
                            <li key={content.id} className='hover:scale-105 transition ease-in-out delay-150'>
                                <button className='md:w-[15vw] md:h-[17vw] h-[25vh] w-[45vw] border-2 border-gray-700 m-3 rounded-lg p-5 flex flex-col' onClick={() => handleNewsClick(content.id)}>
                                    <div className="text-lg font-semibold text-gray-800">
                                        {content.title}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-auto">
                                        {content.date.split('T')[0]}
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className='md:flex md:flex-row md:h-[45vh] '>
                        <div className='relative max-md:h-[15vh] bg-gray-100 m-5  md:w-[30vw] text-xl md:p-5 font-murecho overflow-hidden'>
                            <div className='w-full h-full overflow-y-auto'>
                                {selectedNews?.main_content ?
                                    <div className='max-md:text-sm p-2'>
                                    {selectedNews?.main_content ? parse(selectedNews.main_content) : null}
                                    </div>
                                    :
                                    <div className='text-gray-400 font-kanit text-center py-9'>CONTENT</div>}
                            </div>
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-700"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-700"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-700"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-700"></div>
                        </div>
                        <div className='relative max-md:h-[15vh] bg-gray-100 m-5 md:w-[30vw] text-xl font-murecho'>
                            {selectedNews?.main_image?.url ?
                                <img
                                    src={selectedNews?.main_image.url}
                                    alt={selectedNews?.title}
                                    className='w-full h-full object-cover'
                                />
                                :
                                <div className='text-gray-400  font-kanit text-center py-12'>IMAGE</div>}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-700"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-700"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-700"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-700"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:text-3xl text-xl font-teko opacity-75 mt-auto flex ">
                <a href='https://x.com/ryukokuhorizon' target="_blank" className='m-3'>
                    TWITTER
                </a>
                <a href='https://www.instagram.com/ryukokuhorizon/' target="_blank" className='m-3'>
                    INSTAGRAM
                </a>
                <a href='https://github.com/Ryukoku-Horizon' target="_blank" className='m-3'>
                    GITHUB
                </a>
                <div className='m-3 ml-auto'>
                    © Horizon
                </div>
            </div>
            <div className="bg-gray-100 text-center py-4 mt-6">
                <h2 className="text-xl font-bold mb-4">Sponsored by</h2>
                <p className="text-lg mb-4">Horizonは以下の企業よりサポートを受けています。</p>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">ツールスポンサー: 【Qiita株式会社様】</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="https://qiita.com/" target="_blank" className="text-lg font-semibold hover:underline">
                            ▶ Qiita
                        </a>
                        <a href="https://teams.qiita.com/" target="_blank" className="text-lg font-semibold hover:underline">
                            ▶ Qiita Team
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}