"use client"

import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css'

type SliderCompany = { 
    id: number, 
    image: string,
    name: string 
}

export const Slider = () => {
    
    const sliderImages = [
        { id: 1, image: "/logos/chrome.svg", name: "Chrome" },
        { id: 2, image: "/logos/discord.svg", name: "Discord" },
        { id: 3, image: "/logos/Facebook.svg", name: "Facebook" },
        { id: 4, image: "/logos/instagram.svg", name: "Instagram" },
        { id: 5, image: "/logos/linkedin.svg", name: "LinkedIn" },
        { id: 6, image: "/logos/meta.svg", name: "Meta" },
        { id: 7, image: "/logos/telegram.svg", name: "Telegram" },
        { id: 8, image: "/logos/whatsapp.svg", name: "WhatsApp" },
    ]

    const chunkArray = (sliderCompany: SliderCompany[], size: number) => {
        const result = [];
        for (let i = 0; i < sliderCompany.length; i += size) {
            result.push(sliderCompany.slice(i, i + size));
        }
        return result;
    };

    const groupedImages = chunkArray(sliderImages, 4);

    return (

        <div className='hidden lg:flex w-full justify-center bg-neutral-900 p-6'>

            <div className="max-w-5xl flex flex-col gap-6">

                <h1>Empresas que confiam em nós</h1>
                
                <div className='flex'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
                        effect='fade'
                        autoplay={{ delay: 3000 }}
                        slidesPerView={1}
                        loop={true}
                    >
                        {groupedImages.map((group: SliderCompany[], index: number) => (

                            <SwiperSlide key={index}>

                                <div className='flex justify-around'>

                                    { group.map((item) => (

                                        <div className="flex gap-4 items-center bg-neutral-900 w-full">
                                            <img
                                                key={item.id}
                                                src={item.image}
                                                className='h-16 w-16 object-cover'
                                                alt={`Logo ${item.name}`}
                                            />
                                            <p className="scroll-m-20 font-semibold tracking-tight">
                                                {item.name}
                                            </p>
                                        </div>

                                    ))}

                                </div>

                            </SwiperSlide>

                        ))}
                        
                    </Swiper>

                </div>

            </div>

        </div>

    );

};