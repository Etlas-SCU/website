import React from 'react';
import Style from './PopUp.module.css'
import { Stack, Box } from '@mui/material';
import Close from '../../images/Icons/close.png';

export default function PopUp(props) {
    return (
        (props.trigger ?
            <Stack className={Style.popup}>
                <Box className={Style.popup_inner}>
                    <button className={Style.close_btn} onClick={() => props.setTrigger(false)}>
                        <img src={Close} className={Style.close_img} alt='close' />
                    </button>
                    {props.children}
                </Box>

            </Stack> : "")
    );
}