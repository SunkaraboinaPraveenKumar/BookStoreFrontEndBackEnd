import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function FreeBook() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        let isMounted = true; // Add a flag to track if the component is mounted

        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:3000/book");
                if (isMounted) {
                    setBook(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getBook();

        return () => {
            isMounted = false; // Cleanup function to set the flag to false on unmount
        };
    }, []);

    const filteredData = book.filter((data) => data.category === "Free");
    console.log(filteredData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-10 my-10'>
                <div>
                    <h1 className='text-xl pb-2 font-semibold'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laudantium, cupiditate assumenda sapiente iure accusamus ducimus hic cum magnam. Ipsum voluptas temporibus adipisci cum error porro quaerat repellat dolor delectus?</p>
                </div>
            </div>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <Slider {...settings} className="slider-container">
                    {
                        filteredData.map((data) => (
                            <Cards data={data} key={data.id} className="card" />
                        ))
                    }
                </Slider>
            </div>
        </>
    );
}

export default FreeBook;
