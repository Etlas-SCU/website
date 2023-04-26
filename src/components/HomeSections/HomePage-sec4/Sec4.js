import { Stack, Box } from '@mui/material';
import React from 'react';
import Style from './Sec4.module.css';
import ToursCard from '../../ToursCard/ToursCard'
import { NavLink } from 'react-router-dom';
import OutLineBtn from '../../outLineBtn/OutLineBtn';

export default function Sec4(props) {
    let tour = [1, 2, 3, 4, 5, 6];
    return (
        <Stack className={Style.sec4}>
            <Box className={Style.title}>
                <p>Check popular tours</p>
            </Box>
            <Stack className={Style.tour_cards}>
                <Box className={Style.cards}>
                    {tour.map((value) => {
                        return <ToursCard className={Style.card} key={value} />
                    })}
                </Box>
            </Stack>
            <Box>
                <NavLink to='/tours' >
                    <OutLineBtn className={Style.seeMore} value={("See more!")} />
                </NavLink>
            </Box>
        </Stack>
    );
}