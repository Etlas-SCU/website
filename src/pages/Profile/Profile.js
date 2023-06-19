import React, { useState } from 'react';
import Style from './Profile.module.css';
import { Box } from '@mui/material';
import ProfilePic from '../../images/Pngs/Profile.png';
import Informations from '../../components/ProfileComp/Informations/Informations';
import Favorites from '../../components/ProfileComp/Favorites/Favorites';
import BestScore from '../../components/ProfileComp/BestScore/BestScore';


export default function Profile() {

    const [activeButton, setActiveButton] = useState('Informations');
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = (button) => {
        setActiveButton(button);
        setIsClicked(false);
    };

    const handleInformationsClick = () => {
        setIsClicked(!isClicked);
    };

    const handleFavoritesClick = () => {
        setIsClicked(!isClicked);
    };

    const handleBestScoreClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Box className={Style.prof_info}>
            <Box className={Style.sec1} >
                <h1 className={Style.title}>Your Profile</h1>
                <Box className={Style.prof_comp}>
                    <Box className={Style.profile}>
                        <img src={ProfilePic} alt='profile' className={Style.profile_pic} />
                    </Box>
                    <h4 className={Style.name}>Your Name</h4>
                    <Box className={Style.prof_btn}>
                        <button className={Style.btn} style={{ backgroundColor: activeButton !== 'Informations' ? 'transparent' : '#BF8148' }} onClick={() => { handleButtonClick('Informations'); handleInformationsClick(); }}>Informations</button>
                        <button className={Style.btn} style={{ backgroundColor: activeButton !== 'Favorites' ? 'transparent' : '#BF8148' }} onClick={() => { handleButtonClick('Favorites'); handleFavoritesClick(); }}>Favorites </button>
                        <button className={Style.btn} style={{ backgroundColor: activeButton !== 'BestScore' ? 'transparent' : '#BF8148' }} onClick={() => { handleButtonClick('BestScore'); handleBestScoreClick(); }}>Best Score</button>
                    </Box>
                </Box>
            </Box>

            {activeButton === 'Informations' && (
                <Box className={Style.sec2}>
                    <Informations />
                </Box>
            )
            }

            {activeButton === 'Favorites' && (
                <Box className={Style.sec2}>
                    <Favorites />
                </Box>
            )
            }

            {activeButton === 'BestScore' && (
                <Box className={Style.sec2}>
                    <BestScore />
                </Box>
            )
            }
        </Box>
    )
}
