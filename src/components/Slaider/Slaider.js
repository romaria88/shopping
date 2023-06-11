import './Slaider.css';
import React, {useState, useEffect} from 'react';

const slide1 = '/img/slide1.jpg';
const slide2 = '/img/slide2.png';
const slide3 = '/img/slide3.jpg';
const slide4= '/img/slide4.jpg';
const slide5 = '/img/slide5.jpg';

const img = [
    <img key={slide1} src={slide1} alt=''/>,
    <img key={slide2} src={slide2} alt='' />,
    <img key={slide3} src={slide3}  alt=''/>,
    <img key={slide4} src={slide4}  alt=''/>,
    <img key={slide5} src={slide5}  alt=''/>,
]
export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
        setActiveIndex((current) => {
            const res = current === img.length - 1 ? 0 : current + 1 
            return res
        })
    }, 3000)
    return () => clearInterval()
}, [])
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
    return (
        <div className="slider">
            <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className="slider-img"
                key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className="slider-img slider-img-next"
                key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    )
}




