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
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getFavoriteArticle, getFavoriteById } from '../../../repositories/ProfileRepo';

export default function Favorites() {

    SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);
    const [isLoading, setIsLoading] = useState(true);

    const [favorites, setFavorite] = useState([]);
    const [favoriteId, setFavoriteId] = useState();

    const isfavorite = [1, 2, 3];

    const swiperRef = React.useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        async function getFavorite() {
            const result = await getFavoriteArticle();
            if (!result.isError) {
                console.log(result.body.results);
                setFavorite(result.body.results);
            } else {
                console.log("error");
            }
        }
        getFavorite();
    },);

    useEffect(() => {
        async function getFavoriteId(id) {
            const result = await getFavoriteById(id);
            if (!result.isError) {
                console.log(result.body);
                setFavoriteId(result.body);
            } else {
                console.log("error");
            }
        }
        getFavoriteId();
    },);

    return (
        <Stack>
            <Swiper
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
                spaceBetween={10}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                className={Style.mySwiper}
            >
                <Box className={Style.prev}>
                    <button className={Style.btn} onClick={goPrev} >
                        <KeyboardArrowUpIcon className={Style.prev_icon} style={{ fontSize: 'x-large' }} />
                    </button>
                </Box>
                <Fade direction='right' triggerOnce='false'>
                    { favorites !== null ? favorites.map((favorite) => (
                        <SwiperSlide
                            className={Style.swiperSlide}
                        >
                            <Stack className={Style.fav} direction='row' id={favorite.id} key={favorite.id}>
                                <Box className={Style.img_box}>
                                    {isLoading ?
                                        <>
                                            <Skeleton variant='rectangle' animation='circle' className={Style.fav_skelton} />
                                        </> :
                                        <>
                                            <img src={favoriteId.article.image_url} alt='favorites' className={Style.fav_img} />
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
                                                <h3 className={Style.title}>{favoriteId.article.article_title}</h3>
                                                <p className={Style.prag}>{favoriteId.article.description}</p>
                                                <p className={Style.date}>{favoriteId.article.date}</p>
                                            </Box>
                                            <Box className={Style.icons}>
                                                <ArrowOutwardIcon className={Style.arrow_icon} />
                                                <button className={Style.del_btn}>
                                                    <DeleteIcon className={Style.delete_icon} />
                                                </button>
                                            </Box>
                                        </>
                                    }

                                </Box>
                            </Stack>
                        </SwiperSlide>
                    ))
                        : <h2>no favorite articles </h2>}
                </Fade >

                <Box className={Style.next}>
                    <button className={Style.btn} onClick={goNext} >
                        <KeyboardArrowDownIcon className={Style.next_icon} style={{ fontSize: 'x-large' }} />
                    </button>
                </Box>
            </Swiper>
        </Stack >
    )
}
