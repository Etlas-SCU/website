import React, { useEffect, useState } from 'react';
import Style from './BestScore.module.css';
import { Box, Stack } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';
import { getBestScore } from '../../../repositories/ProfileRepo';
import MPopUp from '../../PopUp_Message/error/MPopUp';



export default function BestScore() {

    const [bestScore , setBestScore] = useState(0) ;
    const [popup , setPopup] = useState(null) ;

    useEffect(() => {
        async function BestScore(){
            var result = await getBestScore() ;
            if(!result.isError){
                setBestScore(result.body.results) ;
            }else{
                setPopup(<MPopUp type="error">Something Wrong</MPopUp>);
                setBestScore(0) ;
            }
        }
        BestScore() ;
    })
    



    return (
        <Stack>
            <Box className={Style.score_info}>
                <Zoom triggerOnce='false' >
                    <p className={Style.score}>
                        {bestScore}
                    </p>
                </Zoom>
                <p className={Style.score_prag}> is your total score </p>
                <p className={Style.best_score}> Best Score </p>
                <p className={Style.score_prag2}> want to record a new high score </p>
            </Box>
            <Zoom triggerOnce='false' >
                <Box className={Style.play}>
                    <NavLink to="/knowledge" ><button type='submit' className={Style.play_btn}>Play</button></NavLink>
                </Box>
            </Zoom>
        </Stack>
    )
}
