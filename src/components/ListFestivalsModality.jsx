import React, { useRef, useState, useEffect } from 'react';
import CardFestival from './CardFestival';
import { useFestivalContext } from '../context/FestivalContext';

import arrowLeft from "../assets/arrowLeft.svg"
import arrowRight from "../assets/arrowRight.svg"

const ListFestivalsModality = ({ title, modality, bg }) => {
    const { error } = useFestivalContext();
    const showButtonAddFavorite = true;
    const [scrollable, setScrollable] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            setScrollable(container.scrollWidth > container.clientWidth);
        }
    }, [modality]);


    // const handleScroll = (direction) => {
    //     const container = containerRef.current;
    //     if (container) {
    //         const scrollStep = container.clientWidth /3 ;
    //         if (direction === 'left') {
    //             container.scrollLeft -= scrollStep;
    //         } else if (direction === 'right') {
    //             container.scrollLeft += scrollStep;
    //         }
    //     }
    // };

    modality.sort((a, b) => new Date(a.data_start) - new Date(b.data_start));

    return (
        <div className={`${bg}  relative pb-2 pt-6`}>
            <div className="border-t-2 border-b-2 py-3 border-zinc-600 w-[80%] mx-auto">
                <span className='text-2xl color-zinc-600'>
                    {title}
                </span>
            </div>
            <div
                className="relative overflow-x-auto white-space-no-wrap snap-mandatory snap-x flex  gap-10 m-5 w-[80%] mx-auto"
                ref={containerRef}
            >
                {modality.length === 0 && <p className='text-red-500'> {error}</p>}
                {modality.map(fest => (
                    <CardFestival key={fest.id} fest={fest} showButtonAddFavorite={showButtonAddFavorite} />
                ))}
            </div>
            {scrollable && (
                <>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 left-[-6px] md:left-[40px] opacity-50 hover:opacity-100 py-2 px-4 rounded-l-lg"
                        // onClick={() => handleScroll('left')}
                    >
                        {/* Flecha a la izquierda */}
                        
                        <img src={arrowLeft} alt=""  className='w-6'/>
                    </button>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 right-[-6px] md:right-[40px] opacity-50 hover:opacity-100 py-2 px-4 rounded-r-lg"
                        // onClick={() => handleScroll('right')}
                    >
                        {/* Flecha a la derecha */}
                        <img src={arrowRight} alt=""  className='w-6'/>
                    </button>
                </>
            )}
        </div>
    );
};

export default ListFestivalsModality;
