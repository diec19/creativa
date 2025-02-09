"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesData } from '@/app/api/data';
import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";

const Features = () => {
    const sectionRef = useRef(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                },
                {
                    threshold: 0.1,
                }
            );
    
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
    
            return () => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            };
        }, []);
    return (
        <section className='py-15 p-15 w-full fade-in' ref={sectionRef}>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id="about-section">
                <div className='text-center mb-14'>
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Trabajos</p>
                    <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto py-5'>Nos dedicamos a.</h2>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>
                    {FeaturesData.map((items, i) => (
                        <div className='p-8 relative rounded-3xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center items-center absolute -top-[50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[50%] transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-110 w-32 h-32'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={128} height={128}  />
                            </div>
                            <h3 className='text-2xl text-black dark:text-white font-semibold text-center mt-16'>{items.heading}</h3>
                            <p className='text-lg font-normal text-black/50 dark:text-white/50 text-center mt-2'>{items.subheading}</p>
                            <div className='flex items-center justify-center '>
                                <Link href='/' className='text-center text-lg group duration-300 ease-in-out font-medium text-primary mt-2 overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0'>
                                    Learn More
                                    <Icon
                                        icon="tabler:chevron-right"
                                        width="24"
                                        height="24"
                                        className="text-primary "
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;
