import React, { useEffect, useState } from 'react';
import Style from './ToursCard.module.css';
import { Stack, Box, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom'
import Stars from '../Stars/Stars'
import { Fade } from 'react-awesome-reveal';

export default function ToursCard({ id ,tour }) {
    console.log(tour)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <Stack className={Style.tours_comp} direction='row'>
            <Fade direction='left' triggerOnce='false'>
                <Box className={Style.tours_card}>
                    <Box className={Style.tours_sec1} >
                        {isLoading ?
                            <>
                                <Skeleton variant='rectangle' animation='wave' className={Style.loading} />
                            </>

                            :
                            <>
                                <img src={tour.images[0].image_url} className={Style.tours_img} alt='tour_img' />
                            </>
                        }
                    </Box>
                    <Box className={Style.tours_sec2} >
                        {isLoading ?
                            <>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </>
                            :
                            <>
                                <Link to={`/tours/${id}`}>
                                    <Box className={Style.Sec2_cont}>
                                        <h4 className={Style.title}>{tour.title}</h4>
                                        <p className={Style.prag}>{tour.description}</p>
                                        <Stars />
                                    </Box>
                                </Link>
                            </>

                        }
                    </Box>
                </Box>
            </Fade>
        </Stack>
    );
}