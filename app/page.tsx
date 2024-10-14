"use client";

import "lenis/dist/lenis.css";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NewsCards from "../components/news/NewsCards";
import { ReactLenis, useLenis } from "lenis/react";

import SplitType from "split-type";

export default function Home() {
  const response = ["Discover", "The", "Horizon"];

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  gsap.registerPlugin(useGSAP);

  gsap.registerPlugin(ScrollTrigger);

  const title = useRef();

  useGSAP(() => {
    // gsap code here...
    const intro_tl = gsap.timeline({ repeat: 0 }),
      text1 = new SplitType(".title1"), // Split the text into lines, words, and characters
      text2 = new SplitType(".title2"), // Split the text into lines, words, and characters
      text3 = new SplitType(".title3"), // Split the text into lines, words, and characters
      chars = text1.chars,
      chars2 = text2.chars,
      chars3 = text3.chars;
    intro_tl.to(text1.chars, {
      x: "150vh",
      duration: 1.5,
      stagger: 0.05,
      ease: "power2.in",
    });
    intro_tl.fromTo(
      text2.chars,
      { opacity: 0, duration: 1.5, stagger: { amount: 1 }, ease: "power2.in" },
      { opacity: 1, duration: 1.5, stagger: { amount: 1 }, ease: "power2.in" }
    );
    intro_tl.fromTo(
      text3.chars,
      {
        y: "20vh",
        opacity: 0,
        duration: 1.5,
        stagger: { amount: 1 },
        ease: "circ.inout",
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: { amount: 1 },
        ease: "circ.inout",
      }
    );
    const main_tl = gsap.timeline({ repeat: 0 });
    main_tl.from(".foo", {
      duration: 1,
      autoAlpha: 0,
      y: 100,
      scale: 0.3,
      scrollTrigger: {
        trigger: ".foo",
        start: "top 70%",
        end: "10% center",
        scrub: true,
      },
    });
    main_tl.from(".bar", {
      duration: 1,
      autoAlpha: 0,
      y: 100,
      scale: 0.3,
      scrollTrigger: {
        trigger: ".bar",
        start: "top 70%",
        end: "10% center",
        scrub: true,
      },
    });
    main_tl.from(".baz", {
      duration: 1,
      autoAlpha: 0,
      y: 100,
      scale: 0.3,
      scrollTrigger: {
        trigger: ".baz",
        start: "top 70%",
        end: "10% center",
        scrub: true,
      },
    });
  });
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
        className="w-1 block bg-gray-400 fixed origin-[0%] top-0 left-0"
        style={{
          height: `calc(100%*${scrolled})`,
        }}
      />
      <div className="hoge text-white text-[25vw] lg:text-[33.3svh] font-bold leading-none">
        <div className="title1 transform -translate-x-[150vh]">
          {response[0]}
        </div>
        <div className="title2 translate-y-900 opacity-100">{response[1]}</div>
        <div className="title3 ">{response[2]}</div>
      </div>
      <div className="h-[30vh] lg:h-[60vh]"></div>
      <section id="about" className="h-[100vh] relative">
        <div className="sticky text-white text-8xl p-5 text-center md:text-left">
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
      <section id="news" className="bg-white relative h-[110vh]">
        <div className="sticky text-black text-8xl p-5">NEWS</div>
        <div className="max-w-7xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2  gap-5 m-5">
            <NewsCards />
            <NewsCards />
          </ul>
        </div>
      </section>
      <section id="faq" className="h-96">
        <div className="sticky text-white text-8xl p-5">FAQ</div>
        <ul>
          <li className="flex">
            <div className="w-[50vw] flex">
              <div className="bg-black text-white w-[10vh] text-7xl flex items-center justify-center">
                Q
              </div>
              <div className="bg-black text-white flex items-center justify-center p-4">
                活動日はいつですか？
              </div>
            </div>
            <div className="w-[50vw] flex">
              <div className="bg-white text-black w-[10vh] text-7xl flex items-center justify-center">
                A
              </div>
              <div className="bg-white text-black flex items-center justify-center p-4">
                深草キャンパスは毎週火曜・金曜、瀬田キャンパスは毎週火曜・木曜に活動しています。
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="link" className="grid grid-cols-1 sm:grid-cols-3  p-10">
        <div className="flex flex-col items-center">
          <a
            href="https://x.com/ryukokuhorizon"
            className="text-white opacity-75 text-xs p-2"
          >
            TWITTER
          </a>
          <a
            href="https://www.instagram.com/horizon_ryu/"
            className="text-white opacity-75 text-xs p-2"
          >
            INSTAGRAM
          </a>
          <a
            href="https://github.com/Ryukoku-Horizon"
            className="text-white opacity-75 text-xs p-2"
          >
            GITHUB
          </a>
        </div>
        <div className="text-center">
          <div className="text-white opacity-75 p-5 text-xs">
            龍谷大学学友会学術文化局プログラミング部Horizon
          </div>
        </div>
        <div className="text-center">
          <div className="text-white opacity-75 text-xs">
            〒612-8577 京都市伏見区深草塚本町67
          </div>
          <div className="text-white opacity-75 text-xs">
            〒520-2123 滋賀県大津市瀬田大江町横谷１−５
          </div>
        </div>
      </section>
      <div className="text-center">
        <div className="text-white p-10 opacity-40">© 2024 Horizon</div>
      </div>
      <a
        href="mailto:ryukokuhorizon@gmail.com"
        className="fixed bg-slate-50 right-0 bottom-5 text-center min-h-[10vh] min-w-[20vw] py-2 px-4 rounded text-6xl font-thin flex items-center justify-center"
        style={{ height: "auto", width: "auto" }}
      >
        Join us!
      </a>
    </ReactLenis>
  );
}
