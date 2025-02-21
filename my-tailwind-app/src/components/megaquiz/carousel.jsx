'use client';
import React, { useRef, useState, useEffect } from 'react';

const Carousel = () => {
    const cards = [
        { title: 'Fundamental Features', questions: 50, time: '30 min' },
        { title: 'Fundamental Rights and Duties', questions: 50, time: '30 min' },
        { title: 'Directive Principles of State Policy', questions: 50, time: '30 min' },
        { title: 'Structure of Government', questions: 50, time: '30 min' },
        { title: 'Judiciary and Legal System', questions: 50, time: '30 min' },
    ];

    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Scroll Event Handler
    useEffect(() => {
        const scrollContainer = scrollRef.current;

        const handleScroll = () => {
            const scrollLeft = scrollContainer.scrollLeft;
            const cardWidth = scrollContainer.scrollWidth / cards.length;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(index);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id='quiz-categories' className='w-full px-4 '>
            <h1 className='text-lg ml-2 md:text-2xl  text-[#5A2D0C]  font-libra'>
                Explore the Constitution: Mega-Quiz Categories
            </h1>

            {/* Scrollable Cards */}
            <div ref={scrollRef} className='flex overflow-x-auto gap-4 p-2 scrollbar-hide snap-x scroll-smooth'>
                {cards.map((card, index) => (
                    <button 
                        key={index}
                        className='flex-none w-[22%] min-w-[250px] bg-[#766C40] text-white p-6 rounded-lg shadow-md font-libra flex flex-col items-start snap-center transition duration-200 hover:bg-[#5A2D0C] active:scale-95'
                    >
                        <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-2 mb-2'>
                            <div className='w-7 h-7 bg-transparent border-2 border-white rounded-full flex items-center justify-center'>
                            <div className='w-5 h-5 border  bg-white rounded-full'></div>
                            </div>
                            </div>
                            <h3 className='text-xl font-bold text-left'>{card.title}</h3>
                        </div>
                        <p className='ml-7'>Number Of Questions: {card.questions}</p>
                        <p className='ml-7'>Time limit: {card.time}</p>
                    </button>
                ))}
            </div>

            {/* Pagination Bullets */}
            <div className="flex justify-center mt-4 gap-2">
                {cards.map((_, index) => (
                    <div 
                        key={index} 
                        className={`w-6 h-2 rounded-full transition-all duration-300 ${
                            activeIndex === index ? 'bg-black w-10' : 'bg-gray-400'
                        }`}
                    ></div>
                ))}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Carousel;
