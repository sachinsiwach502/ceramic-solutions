// import React, { useRef, useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CustomSlider = () => {
//     const sliderRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [isDragging, setIsDragging] = useState(false);
//     const [startY, setStartY] = useState(0);
//     const [sliderHeight, setSliderHeight] = useState('100vh');

//     const updateSliderHeight = () => {
//         if (window.innerWidth <= 400) {
//             setSliderHeight('30vh');
//         } else if (window.innerWidth <= 576) {
//             setSliderHeight('40vh');
//         } else if (window.innerWidth <= 768) {
//             setSliderHeight('50vh');
//         } else if (window.innerWidth <= 992) {
//             setSliderHeight('60vh');
//         } else if (window.innerWidth <= 1200) {
//             setSliderHeight('80vh');
//         } else {
//             setSliderHeight('100vh');
//         }
//     };

//     useEffect(() => {
//         updateSliderHeight(); // Set initial height
//         window.addEventListener('resize', updateSliderHeight); // Update height on resize
//         return () => window.removeEventListener('resize', updateSliderHeight); // Cleanup on unmount
//     }, []);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 700,
//         slidesToShow: 7,
//         slidesToScroll: 1,
//         centerMode: true,
//         centerPadding: '0px',
//         arrows: false,
//         vertical: true,
//         verticalSwiping: true,
//         focusOnSelect: true,
//         beforeChange: (current, next) => setActiveIndex(next),
//     };

//     const slides = [
//         "SocialTensor", "NicheTensor", "THELASTONE",
//         "INFINI", "TourGame", "Aperture",
//         "Aperture", "SocialTensor", "NicheTensor",
//         "SocialTensor", "NicheTensor", "THELASTONE",
//         "INFINI", "TourGame", "Aperture",
//         "Aperture", "SocialTensor", "NicheTensor"
//     ];

//     const handleMouseDown = (e) => {
//         setIsDragging(true);
//         setStartY(e.clientY);
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };

//     const handleMouseMove = (e) => {
//         if (isDragging) {
//             const deltaY = e.clientY - startY;
//             if (deltaY > 0) {
//                 sliderRef.current.slickNext();
//             } else if (deltaY < 0) {
//                 sliderRef.current.slickPrev();
//             }
//             setStartY(e.clientY);
//         }
//     };

//     return (
//         <div className="slider-container">
//             <div
//                 className="slider-wrapper"
//                 style={{ height: sliderHeight }} // Apply dynamic height
//                 onMouseDown={handleMouseDown}
//                 onMouseUp={handleMouseUp}
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseUp}
//                 onWheel={(e) => {
//                     e.preventDefault();
//                     if (e.deltaY < 0) {
//                         sliderRef.current.slickPrev();
//                     } else {
//                         sliderRef.current.slickNext();
//                     }
//                 }}
//             >
//                 <Slider {...settings} ref={sliderRef}>
//                     {slides.map((slide, index) => (
//                         <div
//                             key={index}
//                             className={`slide-content ${index === activeIndex ? 'active-slide' : ''}`}
//                             onClick={() => sliderRef.current.slickGoTo(index)}
//                         >
//                             <h3 className={`slide-text ${index === activeIndex ? 'active' : 'inactive'}`}>
//                                 {slide}
//                             </h3>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default CustomSlider;
