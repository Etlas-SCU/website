import React, { useState } from 'react';
import Style from './ToursInfo.module.css';
import { Box, Stack } from '@mui/material';
import Stars from '../../components/Stars/Stars'
import Tours1 from '../../images/Pngs/Tours1.png'
import Tours2 from '../../images/Pngs/Tours2.png'
import Tours3 from '../../images/Pngs/Tours3.png'
import Tours4 from '../../images/Pngs/Tours4.png'
import Tours5 from '../../images/Pngs/Tours5.png'
import Arrow_Prev from '../../images/Icons/prevArrow.png'
import Arrow_Next from '../../images/Icons/nextArrow.png'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PopUp from '../../components/PopUp_Message/PopUp';

export default function ToursInfo(props) {
    
    SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);
    const [buttonPopUp, setButtonPopUp] = useState(false);

    // reference for swiper
    const swiperRef = React.useRef(null);

    // goto next slide
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };


    // goto prev slide
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };


    // the images that will be displayed
    const slide_img = [
        Tours1,
        Tours2,
        Tours3,
        Tours4,
        Tours5,
    ];


    return (
        <Stack>
            <Stack className={Style.Sec1}>
                <Box className={Style.slide}>
                    <Swiper
                        ref={swiperRef} 
                        autoplay={true}
                        initialSlide={slide_img.length / 2}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            0:{
                                slidesPerView: 1 ,
                                spaceBetween: 5,
                            },
                            700:{
                                slidesPerView: 2,
                                spaceBetween:7,
                            },
                            900:{
                                slidesPerView: 3,
                                spaceBetween:9,
                            }
                        }}
                        pagination={true}
                        className={Style.mySwiper}
                    >
                        {slide_img.map((img, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <img src={img} alt="" className={Style.mySwiper_img}/>
                                </SwiperSlide>
                            );
                        })}
                        <Box className={Style.slider_controller}>
                            <button className={Style.prev_btn} onClick={goPrev}>
                                <img src={Arrow_Prev} className={Style.prev_img} alt='prev'/>
                            </button>
                            <button className={Style.next_btn} onClick={goNext}>
                                <img src={Arrow_Next} className={Style.next_img} alt='next'/>
                            </button>
                            <Box className={Style.swiper_pagination}></Box>
                        </Box>
                    </Swiper>
                </Box>
            </Stack>
            <Stack className={Style.Sec2}>
                <Box className={Style.tours_info} >
                    <Box width='80%'>
                        <h2 className={Style.tours_title}>Giza Tour</h2>
                        <p className={Style.tours_prag}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Box>
                    <Box className={Style.tours_rate}>
                        <Stars />
                        <button onClick={() => setButtonPopUp(true)} className={Style.rate_btn}>
                            <p className={Style.tours_prag3}>
                                if you take a trip to Giza before, don't forget to give your feedback.
                            </p>
                        </button>
                    </Box>
                </Box>
                <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                    <Box>
                        <h2 className={Style.popup_title}>Give us your feedback</h2>
                        <p className={Style.popup_prag}>What do you think about this tour ? </p>
                        <br />
                    </Box>
                    <Box className={Style.popup_star}>
                        <Stars rating={0} />
                    </Box>
                </PopUp>
                <br />
                <br />
                <Box>
                    <p className={Style.tours_prag2}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </Box>
            </Stack>
            <br />
            <br />
        </Stack>
    );
}

