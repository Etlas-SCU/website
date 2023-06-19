import { Stack, Box } from '@mui/system'
import React, { useState } from 'react'
import Style from './ProfileCard.module.css'
import ProfilePic from '../../images/Pngs/Profile.png';

export default function ProfileCard() {

    const [isClicked , setIsClicked] = useState(false) ;

    const handleClick = () => {
        setIsClicked(!isClicked) ;
    }


    return (
        <Stack>
            <Box className={Style.prof_comp}>
                <Box className={Style.profile}>
                    <img src={ProfilePic} alt='profile' className={Style.profile_pic} />
                </Box>
                <h4 className={Style.name}>Your Name</h4>
                <Box className={Style.prof_btn}>
                    <button className={Style.btn} style={ { backgroundColor : isClicked ? 'transparent' : '#BF8148' }} onClick={handleClick}>Informations</button>
                    <button className={Style.btn}>Favorites </button>
                    <button className={Style.btn}>Best Score</button>
                </Box>
            </Box>
        </Stack>
    )
}
