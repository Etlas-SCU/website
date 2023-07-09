import React, { useState, useEffect , useContext } from 'react';
import Style from './Favorites.module.css';
import { Box, Stack } from '@mui/system';
import Arrow from '../../../images/Icons/ArrowIcon.png';
import Delete from '../../../images/Icons/Delete.png';
import {Link} from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Skeleton } from '@mui/material';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { deleteFavorite, getFavoriteArticle} from '../../../repositories/ProfileRepo';
import MPopUp from "../../PopUp_Message/error/MPopUp";
import { Context } from "../../Context/Context";

export default function Favorites() {

    SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);
    const [isLoading, setIsLoading] = useState(true);
    const [popup, setPopup] = useState(null);
    const { setMassagePopup } = useContext(Context);

    const [favorites, setFavorite] = useState([]);

    const swiperRef = React.useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        async function getFavorite() {
            const result = await getFavoriteArticle();
            if (!result.isError) {
                let favoriteAritcleList = result.body.results;
                
                favoriteAritcleList = favoriteAritcleList
                .filter(favorite => favorite.article !== null)
                .map(favorite => favorite.article);

                setFavorite(favoriteAritcleList);
            } else {
                console.log("error");
            }
        }
        getFavorite();
    }, []);

    useEffect( () => {
        async function DeleteFav(body) {
            const result = await deleteFavorite(body);
            if (!result.isError) {
              setMassagePopup(true);
              setPopup(<MPopUp type="done">The article removed from your Favorite</MPopUp>);
            } else {
              setMassagePopup(true);
              setPopup(<MPopUp type="error">The article can't remove from your Favorite </MPopUp>);
            }
        }
        DeleteFav();
    })

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
                spaceBetween={7}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                className={Style.mySwiper}
            >
                <Fade direction='right' triggerOnce='false'>
                    { favorites !== null ? favorites.map((favorite, index) => (
                        <SwiperSlide
                            className={Style.swiperSlide}
                            key={index}
                        >
                            <Stack className={Style.fav} direction='row' id={favorite.id} key={favorite.id}>
                                <Box className={Style.img_box}>
                                    {isLoading ?
                                        <>
                                            <Skeleton variant='rectangle' animation='circle' className={Style.fav_skelton} />
                                        </> :
                                        <>
                                            <img src={favorite.image_url} alt='favorites' className={Style.fav_img} />
                                        </>}
                                </Box>
                                <Box className={Style.sec2} >
                                    {isLoading ?
                                        <>
                                            <Skeleton width='70%' />
                                            <Skeleton width='10%' />
                                            
                                        </>
                                        :
                                        <>
                                            <Box className={Style.fav_info}>
                                                <h3 className={Style.title}>{favorite.article_title}</h3>
                                                <p className={Style.prag}>{favorite.description}</p>
                                                <p className={Style.date}>{favorite.date}</p>
                                            </Box>
                                            <Box className={Style.icons}>
                                                <button className={Style.arrow_btn} >
                                                    <Link to={`/articles/${favorite.id}`}>
                                                        <img src={Arrow} className={Style.arrow_icon} alt='arrow'/>
                                                    </Link>
                                                </button>
                                                <button className={Style.del_btn}>
                                                    <img src={Delete} alt='delete' className={Style.delete_icon} />
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
            </Swiper>
        </Stack >
    )
}
