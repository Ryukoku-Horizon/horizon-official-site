'use client'

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from 'lenis/react'
import SplitType from 'split-type'

import { filteringList } from '../features/filteringList'

import { rawNewsList, rawNewsCategoryList, News, NewsCategory } from '../types/news'

export default function View({
  news_list,
  news_category
}: {
  news_list: rawNewsList;
  news_category: rawNewsCategoryList;
}) {

  const response = ["Discover", "The", "Horizon"]
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  gsap.registerPlugin(useGSAP);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // gsap code here...
      const intro_tl = gsap.timeline({ repeat: 0 }),
        text1 = new SplitType(".title1"), // Split the text into lines, words, and characters
        text2 = new SplitType(".title2"), // Split the text into lines, words, and characters
        text3 = new SplitType(".title3"), // Split the text into lines, words, and characters
        chars = text1.chars,
        chars2 = text2.chars,
        chars3 = text3.chars;
      intro_tl.to(text1.chars, { x: '150vh', duration: 1.5, stagger: 0.05, ease: "power2.in" });
      intro_tl.fromTo(text2.chars, { opacity: 0, duration: 1.5, stagger: { amount: 1 }, ease: "power2.in" }, { opacity: 1, duration: 1.5, stagger: { amount: 1 }, ease: "power2.in" });
      intro_tl.fromTo(text3.chars, { y: '20vh', opacity: 0, duration: 1.5, stagger: { amount: 1 }, ease: "circ.inout" }, { y: 0, opacity: 1, duration: 1.5, stagger: { amount: 1 }, ease: "circ.inout" });
      const main_tl = gsap.timeline({ repeat: 0 });
      main_tl.from('.foo', { duration: 1, autoAlpha: 0, y: 100, scale: 0.3, scrollTrigger: { trigger: '.foo', start: 'top 70%', end: '10% center', scrub: true, } })
      main_tl.from('.bar', { duration: 1, autoAlpha: 0, y: 100, scale: 0.3, scrollTrigger: { trigger: '.bar', start: 'top 70%', end: '10% center', scrub: true, } })
      main_tl.from('.baz', { duration: 1, autoAlpha: 0, y: 100, scale: 0.3, scrollTrigger: { trigger: '.baz', start: 'top 70%', end: '10% center', scrub: true, } })
    },
  );

  const [scrolled, setScrolled] = useState<number>(0);

  useLenis(({ scroll }) => {
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    setScrolled(scroll / (scrollHeight - clientHeight));

  });

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

  const filterdNews = filteringList({ news: newsList, category: filteringCategory })

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
    <ReactLenis root>
      <div
        className='w-1 block bg-gray-400 fixed origin-[0%] top-0 left-0'
        style={{
          height: `calc(100%*${scrolled})`
        }}
      />
      <div className="hoge text-white text-[33.3svh] font-bold leading-none" >
        <div className="title1 transform -translate-x-[150vh]">{response[0]}</div>
        <div className="title2 translate-y-900 opacity-100">{response[1]}</div>
        <div className="title3 ">{response[2]}</div>
      </div>
      <div className='h-[60vh]'></div>
      <section id="about" className="h-[100vh] relative">
        <div className="sticky text-white text-8xl p-5">
          ABOUT
        </div>
        <div className="foo text-center text-white text-5xl">
          What is Horizon?
        </div>
        <div className="bar text-white text-center text-4xl mt-[15vh]">
          Horizonは創設さればかりのプログラミングサークルです。
        </div>
        <div className="baz text-white text-center text-4xl mt-[15vh]">
          私たちと一緒にプログラミングを学びませんか？
        </div>
      </section>
      <section id="main" className="bg-white relative p-8 h-[100vh] flex flex-col">
        <div className='flex flex-row'>
          <div className='font-rubik text-4xl'>
            <div className='pb-10'>
              NEWS
            </div>
            <div className='pb-10'>
              PRODUCT
            </div>
            <div>
              EVENT
            </div>
          </div>
          <div className='grow-0 pl-10'>
            <div className='font-kanit text-lg flex-row flex ml-10'>
              {[...NewsCategories].map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id, category.title)}
                  className={`px-5 rounded-2xl m-1 border-2 border-gray-700 ${category.selected ? 'text-white bg-gray-700' : ''}`}
                >
                  {"#" + category.title}
                </button>
              ))}
            </div>

            <ul className='flex flex-row'>
              {[...filterdNews].map((content) => (
                <li key={content.id} className='hover:scale-105 transition ease-in-out delay-150'>
                  <button className='w-[15vw] h-[17vw] border-2 border-gray-700 m-3 rounded-lg p-5 flex flex-col' onClick={() => handleNewsClick(content.id)}>
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
            <div className='flex flex-row h-[45vh]'>
              <div className='relative bg-gray-100 m-5 w-[30vw] text-xl p-5 font-murecho flex items-center justify-center'>
                {selectedNews?.main_content ?
                  <div>{selectedNews?.main_content}</div>
                  :
                  <div className='text-gray-400 font-kanit'>CONTENT</div>}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-700"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-700"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-700"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-700"></div>
              </div>
              <div className='relative bg-gray-100 m-5 w-[30vw] text-xl font-murecho flex items-center justify-center'>
                {selectedNews?.main_image?.url ?
                  <img
                    src={selectedNews?.main_image.url}
                    alt={selectedNews?.title}
                    className='w-full h-full object-cover'
                  />
                  :
                  <div className='text-gray-400  font-kanit'>IMAGE</div>}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-700"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-700"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-700"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-teko opacity-75 mt-auto flex ">
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
      </section>
    </ReactLenis>
  );
}
