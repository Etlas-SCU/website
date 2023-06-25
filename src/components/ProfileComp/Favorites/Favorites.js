import React, { useState, useEffect } from 'react';
import Style from './Favorites.module.css';
import { Box, Stack } from '@mui/system';
import FavoritesImg from '../../../images/Pngs/Favorites.png';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fade } from 'react-awesome-reveal';
import { Skeleton } from '@mui/material';
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import SwiperCore, { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

export default function Favorites() {

    // SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);
    const favorite = [1, 2, 3];

    // const swiperRef = React.useRef(null);

    // // goto next slide
    // const goNext = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slideNext();
    //     }
    // };


    // // goto prev slide
    // const goPrev = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slidePrev();
    //     }
    // };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <Stack>
            {/* <Swiper
                ref={swiperRef}
                autoplay={false}
                initialSlide={0}
                effect={'slide'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                direction='vertical'
                longSwipes={false}
                setWrapperSize={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                className={Style.mySwiper}
            > */}
                <Box className={Style.prev}>
                    <button className={Style.btn} >
                        <KeyboardArrowUpIcon className={Style.prev_icon} style={{ fontSize: 'x-large' }} />
                    </button>
                </Box>
                <Fade direction='right' triggerOnce='false'>
                    {favorite.map((value) => (
                        // <SwiperSlide 
                        // className={Style.swiperSlide}
                        // >
                            <Stack className={Style.fav} direction='row' id={value} key={value}>
                                <Box className={Style.img_box}>
                                    {isLoading ?
                                        <>
                                            <Skeleton variant='rectangle' animation='circle' className={Style.fav_skelton} />
                                        </> :
                                        <>
                                            <img src={FavoritesImg} alt='favorites' className={Style.fav_img} />
                                        </>}
                                </Box>
                                <Box className={Style.sec2} >
                                    {isLoading ?
                                        <>
                                            <Skeleton />
                                            <Skeleton />
                                            <Skeleton width='70%' />
                                        </>
                                        :
                                        <>
                                            <Box className={Style.fav_info}>
                                                <h3 className={Style.title}>Anubis</h3>
                                                <p className={Style.prag}>Know more about <br /> Anubis and his powers.</p>
                                                <p className={Style.date}>15 Jan 2023</p>
                                            </Box>
                                            <Box className={Style.icons}>
                                                <ArrowOutwardIcon className={Style.arrow_icon} />
                                                <DeleteIcon className={Style.delete_icon} />
                                            </Box>
                                        </>
                                    }

                                </Box>
                            </Stack>
                        // </SwiperSlide>
                    ))
                    }
                </Fade >

                <Box className={Style.next}>
                    <button className={Style.btn} >
                        <KeyboardArrowDownIcon className={Style.next_icon} style={{ fontSize: 'x-large' }} />
                    </button>
                </Box>
            {/* </Swiper> */}
        </Stack >
    )
}
