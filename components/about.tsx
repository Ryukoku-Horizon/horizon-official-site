import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    return (
        <section id="about" className="bg-white relative">
            <div className="foo text-center  text-5xl">
            </div>
            <div className='h-[30vh]'></div>
            <div className='h-screen w-screen'>
                <div className='md:pl-[30vw] md:pr-[20vw] flex flex-row'>
                    <div className='font-oxanium sticky top-1/2 -translate-y-1/2 h-fit md:text-5xl text-3xl border-r-2'>
                        what is Horizon?
                    </div>
                    <div className='font-murecho text-lg'>
                        <div className='h-[25vh] m-6'>
                            Horizonは2021年に創設されたプログラミングサークルです
                        </div>
                        <div className='h-[25vh] m-6'>
                            メンバーは80人。龍谷大学深草キャンパスと瀬田キャンパスで活動しています
                        </div>
                        <div className='h-[25vh] m-6'>
                            龍谷大学学術文化局の公認団体です
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[30vh]'></div>
            <div className='h-screen w-screen'>
                <div className='md:pl-[30vw] md:pr-[20vw] flex flex-row'>
                <div className='font-murecho text-lg'>
                        <div className='h-[25vh] m-6'>
                            初心者を対象とした基礎班はカリキュラムベースの学習
                        </div>
                        <div className='h-[25vh] m-6'>
                            上級者を対象とした発展班は自由なプロジェクト活動
                        </div>
                        <div className='h-[25vh] m-6'>
                            年度の終わりには部内ハッカソンを開催
                        </div>
                        <div className='h-[25vh] m-6'>
                            深草キャンパスは毎週火曜日・金曜日、瀬田キャンパスは毎週水曜日・金曜日に活動しています
                        </div>
                    </div>
                    <div className='font-oxanium sticky top-1/2 -translate-y-1/2 h-fit md:text-5xl text-3xl border-l-2 pl-9'>
                        Horizon Activity details
                    </div>
                    
                </div>
            </div>
            <div className='h-[50vh]'></div>Ï
        </section>
    )
}