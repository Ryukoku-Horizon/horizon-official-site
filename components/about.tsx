import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    return (
        <section id="about" className="bg-white h-[100vh] relative">
            <div className="sticky text-8xl p-5">
                ABOUT
            </div>
            <div className="foo text-center  text-5xl">
                What is Horizon?
            </div>
            <div className="bar text-center text-4xl mt-[15vh]">
                Horizonは創設さればかりのプログラミングサークルです。
            </div>
            <div className="baz  text-center text-4xl mt-[15vh]">
                私たちと一緒にプログラミングを学びませんか？
            </div>
        </section>
    )
}