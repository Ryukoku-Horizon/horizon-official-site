'use client'

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from 'lenis/react'
import SplitType from 'split-type'

import Footer from './footer'
import About from './about'

import { rawNewsList, rawNewsCategoryList } from '../types/news'

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

  return (
    <ReactLenis root>
      <div
        className='w-1 block bg-gray-400 fixed origin-[0%] top-0 left-0'
        style={{
          height: `calc(100%*${scrolled})`
        }}
      />
      <div className="hoge m-5 text-white text-[20vw] lg:text-[30svh] font-bold leading-none" >
        <div className="title1 transform -translate-x-[150vh]">{response[0]}</div>
        <div className="title2 translate-y-900 opacity-100">{response[1]}</div>
        <div className="title3 ">{response[2]}</div>
      </div>
      <div className='h-[60vh]'></div>
      <About/>
      <Footer news_list={news_list} news_category={news_category}/>
    </ReactLenis>
  );
}
