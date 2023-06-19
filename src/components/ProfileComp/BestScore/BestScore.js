import React from 'react';
import Style from './BestScore.module.css';
import { Box, Stack } from '@mui/system';
import { NavLink } from 'react-router-dom';



export default function BestScore() {
    return (
        <Stack>
            <Box className={Style.score_info}>
                <p className={Style.score}> 374 </p>
                <p className={Style.score_prag}> is your total score </p>
                <p className={Style.best_score}> Best Score </p>
                <p className={Style.score_prag2}> want to record a new high score </p>
            </Box>
            <Box className={Style.play}>
                <NavLink to="/knowledge" ><button type='submit' className={Style.play_btn}>Play</button></NavLink>
            </Box>
        </Stack>
    )
}
