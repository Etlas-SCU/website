import React from 'react';
import Style from './ToursInfo.module.css';
import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Stars from '../../components/Stars/Stars'
import Tours1 from '../../images/Pngs/Tours1.png'
import Tours2 from '../../images/Pngs/Tours2.png'
import Tours3 from '../../images/Pngs/Tours3.png'
import Tours4 from '../../images/Pngs/Tours4.png'
import Tours5 from '../../images/Pngs/Tours5.png'
// import Arrow_Prev from '../../images/Icons/Arrow.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';



export default function ToursInfo(props) {
    // let tour_img = [1, 2, 3, 4, 5];

    return (
        <>
            <Stack className={Style.Sec1}>
                <Box className={Style.slide}>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }
                        }
                        pagination={{ el: '.swiper_pagination', clickable: true }}
                        navigation={{
                            nextEl: '.next_img',
                            prevEl: '.prev_img',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className={Style.swiper_container}
                    >
                        <SwiperSlide className={Style.swiper_slide}><img src={Tours1} alt='tour1' /></SwiperSlide>
                        <SwiperSlide className={Style.swiper_slide}><img src={Tours2} alt='tour2' /></SwiperSlide>
                        <SwiperSlide className={Style.swiper_slide}><img src={Tours3} alt='tour3' /></SwiperSlide>
                        <SwiperSlide className={Style.swiper_slide}><img src={Tours4} alt='tour4' /></SwiperSlide>
                        <SwiperSlide className={Style.swiper_slide}><img src={Tours5} alt='tour5' /></SwiperSlide>
                        
                        <Box className = {Style.slider_controller}>
                            <Box className={Style.prev_img} slider-arrow>
                                <ion-icon name="arrow-back-circle-outline"></ion-icon>
                            </Box>
                            <Box className={Style.next_img} slider-arrow>
                                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                            </Box>
                            <Box className={Style.swiper_pagination}></Box>
                        </Box>
                    </Swiper>
                </Box>
            </Stack>
            <Stack className={Style.Sec2}>
                <Stack direction='row' className={Style.tours_info} >
                    <Box width='85%'>
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
                        <Link to='/'>
                            <p className={Style.tours_prag3}>
                                if you take a trip to Giza before, don’t forget to give your feedback.
                            </p>
                        </Link>
                    </Box>
                </Stack>
                <br />
                <br />
                <p className={Style.tours_prag2}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
            </Stack>
        </>
    );
}

