import React from 'react';
import Style from './ToursCard.module.css';
import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom'
import TourImg from '../../images/Pngs/Tours.png';
import Stars from '../Stars/Stars'

export default function ToursCard({ id }) {
    return (
        <Stack className={Style.tours_card} direction='row'>
            <Box className={Style.tours_sec1} >
                <img src={TourImg} className={Style.tours_img} alt='tour_img' />
            </Box>
            <Box className={Style.tours_sec2} >
                <Link to={`/tours/${id}`}>
                    <Box className={Style.Sec2_cont}>
                        <h4 className={Style.title}>Giza tour</h4>
                        <p className={Style.prag}>where you can visit the <br /> pyramids and ride the camels.</p>
                        <Stars />
                    </Box>
                </Link>
            </Box>
        </Stack>
    );
}