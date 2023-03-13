import React from 'react'
import { Box, Stack } from "@mui/material";
import {Link} from 'react-router-dom'
import Design from "./Sec6.module.css";
import Etitle from '../../../images/Pngs/etitle.png'
import App from '../../../images/Pngs/AppStore.png'
import Play from '../../../images/Pngs/PlayStore.png'
import Face from '../../../images/Icons/face.png'
import Twitter from '../../../images/Icons/twitter.png'
import Google from '../../../images/Icons/google.png'
import Linked from '../../../images/Icons/linkedin.png'
import Arrow from '../../../images/Icons/Up arrow.png'

export default function Sec6() {
    return (
        <Stack className={Design.footer}>
            <Box className={Design.arrow_icon}>
                <a href='##'>
                    <img src={Arrow} alt="Home" />
                </a>
            </Box>
            <Stack className={Design.footer_section} direction='row'>
                <Stack direction='column' className={Design.footer_sec1}>
                    <Box className={Design.footer_title}>
                        <img src={Etitle} alt='img-footer' className={Design.footer_img} />
                        <h1 className={Design.footer_h1}>ETLAS</h1>
                    </Box>
                    <Box sx={{ width: '80px', height: '1px', background: '#003441' }}></Box>
                    <p className={Design.footer_prag1}> You can download the app from the links below:</p>
                    <Box className={Design.download}>
                        <a href='##'>
                            <img src={Play} alt='download-with-play-store' className={Design.download_btn} />
                        </a>
                        <a href='##'>
                            <img src={App} alt='download-with-play-store' className={Design.download_btn} />
                        </a>
                    </Box>
                </Stack>
                <Stack className={Design.footer_sec2}></Stack>
                <Stack className={Design.footer_sec3}>
                    <Stack direction='row' gap='20px'>
                        <ul>
                            Mapping
                            <li> <a href='##' >Why our Application? </a></li>
                            <li><a href='##' >Know History </a></li>
                            <li><a href='##' >Tours</a></li>
                            <li><a href='##' >Articles</a></li>
                            <li><a href='##' >Knowledge Check</a></li>
                        </ul>
                        <ul>
                            Language
                            <li><a href='##' >English</a></li>
                            <li><a href='##' >العربية</a></li>
                            <li><a href='##' >Española</a></li>
                            <li><a href='##' >Française</a></li>
                        </ul>
                    </Stack>
                    <Box className={Design.footer_prag2}>
                        <a href='##' >Contact Us</a>
                        <a href='##' >Terms and conditions</a>
                        <Link to='/about' >About US</Link>
                    </Box>
                </Stack>
            </Stack>
            <Stack className={Design.footer_icons} direction='row'>
                <p className={Design.footer_prag3}>© Etlas all rights reserved 2023</p>
                <Box className={Design.icons}>
                    <a href='##'>
                        <img src={Face} alt="facebook" />
                    </a>
                    <a href='##'>
                        <img src={Twitter} alt="twitter" />
                    </a>
                    <a href='##'>
                        <img src={Linked} alt="linkedin" />
                    </a>
                    <a href='##'>
                        <img src={Google} alt="google" />
                    </a>
                </Box>
            </Stack>
        </Stack>
    )
}
