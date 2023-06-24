import { Stack, Box } from '@mui/system';
import Style from './Terms.module.css';
import React, { useState, useEffect } from 'react';
import Pic from '../../images/Pics/pic1.png'
import Status from '../../images/Pngs/hat-stock 1.png'
import { Skeleton } from '@mui/material';

export default function Terms(props) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <Stack className={Style.terms}>
                <Box className={Style.sec1}>
                    <h1 className={Style.terms_title}>Terms and Conditions</h1>
                    <p className={Style.prag1}>© Etlas all rights reserved 2022</p>
                </Box>
            </Stack>
            <Stack className={Style.sec2}>
                <Box className={Style.sec2_component}>
                    {isLoading ?
                        <>
                            <Skeleton variant='rectangle' animation='circle' className={Style.sec2_skelton} />
                        </>
                        :
                        <>
                            <p className={Style.prag2}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </>}
                    <Box className={Style.images}>
                        <img src={Pic} alt='terms_img' className={Style.terms_img} />
                        <img src={Status} alt='terms_status' className={Style.terms_status} />
                    </Box>
                </Box>
                <Box className={Style.sec3}>
                    {isLoading ?
                        <>
                            <Skeleton variant='rectangle' animation='circle' className={Style.sec3_skelton}  />
                            <Skeleton  />
                        </>
                        :
                        <>
                            <p className={Style.prag3}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </>
                    }
                </Box>
            </Stack>
        </>
    );
}
