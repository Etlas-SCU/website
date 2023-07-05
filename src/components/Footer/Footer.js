import React, { useEffect, useState } from 'react'
import { Box, Stack } from "@mui/material";
import { Link } from 'react-router-dom'
import Style from "./Footer.module.css";
import Etitle from '../../images/Pngs/etitle.png'
import App from '../../images/Pngs/AppStore.png'
import Play from '../../images/Pngs/PlayStore.png'
import Face from '../../images/Icons/face.png'
import Twitter from '../../images/Icons/twitter.png'
import Google from '../../images/Icons/google.png'
import Linked from '../../images/Icons/linkedin.png'
import Arrow from '../../images/Icons/Up arrow.png'
import { Fade, Zoom } from 'react-awesome-reveal';

export default function Footer() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Stack className={Style.footer}>
            <Box className={Style.arrow_icon}>
                {backToTop && (<button onClick={scrollUp} className={Style.scroll_btn}>
                    <img src={Arrow} alt="Home" />
                </button>)}
            </Box>
            <Stack className={Style.footer_section} direction='row'>
                <Stack direction='column' className={Style.footer_sec1}>
                    <Fade direction='left' triggerOnce='false'>
                        <Box className={Style.footer_title}>
                            <img src={Etitle} alt='img-footer' className={Style.footer_img} />
                            <h1 className={Style.footer_h1}>ETLAS</h1>
                        </Box>
                    </Fade>
                    <Box sx={{ width: '80px', height: '1px', background: '#003441' }}></Box>
                    <p className={Style.footer_prag1}> You can download the app from the links below:</p>
                    <Zoom triggerOnce='false'>
                        <Box className={Style.download}>
                            <a href='##'>
                                <img src={Play} alt='download-with-play-store' className={Style.download_btn} />
                            </a>
                            <a href='##'>
                                <img src={App} alt='download-with-play-store' className={Style.download_btn} />
                            </a>
                        </Box>
                    </Zoom>
                </Stack>
                <Stack className={Style.footer_sec2}></Stack>
                <Stack className={Style.footer_sec3}>
                    <Fade direction='right' triggerOnce='false'>
                        <Stack direction='row' gap='20px'>
                            <ul>
                                Mapping
                                <li> <Link to='/download'>Why our Application? </Link> </li>
                                <li> <Link to='/know_history' >Know History </Link> </li>
                                <li> <Link to='/tours'> Tours </Link></li>
                                <li> <Link to='/articles'> Articles </Link> </li>
                                <li><Link to='/knowledge'>Knowledge Check </Link></li>
                            </ul>
                            <ul>
                                Language
                                <li>English</li>
                                <li>العربية</li>
                                <li>Española</li>
                                <li>Française</li>
                            </ul>
                        </Stack>
                    </Fade>
                    <Box className={Style.footer_prag2}>
                        <Link to='/contact' >Contact Us</Link>
                        <Link to='/terms'>Terms and conditions</Link>
                        <Link to='/about'>About US</Link>
                    </Box>
                </Stack>
            </Stack>
            <Stack className={Style.footer_icons} direction='row'>
                <p className={Style.footer_prag3}>© Etlas all rights reserved 2023</p>
                <Box className={Style.icons}>
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