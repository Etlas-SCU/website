import React from 'react';
import Style from './Favorites.module.css';
import { Box, Stack } from '@mui/system';
import FavoritesImg from '../../../images/Pngs/Favorites.png';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Favorites() {
    const favorite = [1, 2, 3];

    return (
        <Stack>
            <Box className={Style.prev}>
                <KeyboardArrowUpIcon className={Style.prev_icon} />
            </Box>
            {favorite.map((value) => (
                <Stack className={Style.fav} direction='row' id={value} key={value}>
                    <Box className={Style.img_box}>
                        <img src={FavoritesImg} alt='favorites' className={Style.fav_img} />
                    </Box>
                    <Box className={Style.sec2} >
                        <Box className={Style.fav_info}>
                            <h3 className={Style.title}>Anubis</h3>
                            <p className={Style.prag}>Know more about <br /> Anubis and his powers.</p>
                            <p className={Style.date}>15 Jan 2023</p>
                        </Box>
                        <Box className={Style.icons}>
                            <ArrowOutwardIcon className={Style.arrow_icon} />
                            <DeleteIcon className={Style.delete_icon} />
                        </Box>
                    </Box>
                </Stack>
            ))}
            <Box className={Style.next}>
                <KeyboardArrowDownIcon className={Style.next_icon} />
            </Box>
        </Stack>
    )
}
