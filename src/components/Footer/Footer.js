import React, { useEffect , useState} from 'react'
import { Box, Stack } from "@mui/material";
import { Link} from 'react-router-dom'
import Style from "./Footer.module.css";
import Etitle from '../../images/Pngs/etitle.png'
import App from '../../images/Pngs/AppStore.png'
import Play from '../../images/Pngs/PlayStore.png'
import Face from '../../images/Icons/face.png'
import Twitter from '../../images/Icons/twitter.png'
import Google from '../../images/Icons/google.png'
import Linked from '../../images/Icons/linkedin.png'
import Arrow from '../../images/Icons/Up arrow.png'

export default function Footer() {
    const [backToTop , setBackToTop] = useState(false) ;

    useEffect(() =>{
        window.addEventListener("scroll" , ()=> {
            if(window.scrollY > 100) {
                setBackToTop(true) ;
            }else{
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

    const [backToSec2 , setBackToSec2] = useState(false) ;

    useEffect(() =>{
        window.addEventListener("scroll" , ()=> {
            if(window.scrollY > 100) {
                setBackToSec2(true) ;
            }else{
                setBackToSec2(false);
            }
        })
    }, [])

    const scrollUpSec2 = () => {
        window.scrollTo({
            top: 570,
            behavior: 'smooth'
        })
    }

    const [backToSec3 , setBackToSec3] = useState(false) ;

    useEffect(() =>{
        window.addEventListener("scroll" , ()=> {
            if(window.scrollY > 100) {
                setBackToSec3(true) ;
            }else{
                setBackToSec3(false);
            }
        })
    }, [])

    const scrollUpSec3 = () => {
        window.scrollTo({
            top: 1140,
            behavior: 'smooth'
        })
    }

    const [backToSec4 , setBackToSec4] = useState(false) ;

    useEffect(() =>{
        window.addEventListener("scroll" , ()=> {
            if(window.scrollY > 100) {
                setBackToSec4(true) ;
            }else{
                setBackToSec4(false);
            }
        })
    }, [])

    const scrollUpSec4 = () => {
        window.scrollTo({
            top: 1850,
            behavior: 'smooth'
        })
    }

    const [backToSec5 , setBackToSec5] = useState(false) ;

    useEffect(() =>{
        window.addEventListener("scroll" , ()=> {
            if(window.scrollY > 100) {
                setBackToSec5(true) ;
            }else{
                setBackToSec5(false);
            }
        })
    }, [])

    const scrollUpSec5 = () => {
        window.scrollTo({
            top: 2500,
            behavior: 'smooth'
        })
    }



    return (
        <Stack className={Style.footer}>
            <Box className={Style.arrow_icon}>
                {backToTop && ( <button onClick={scrollUp} className={Style.scroll_btn}>
                    <img src={Arrow} alt="Home" />
                </button>) }
            </Box>
            <Stack className={Style.footer_section} direction='row'>
                <Stack direction='column' className={Style.footer_sec1}>
                    <Box className={Style.footer_title}>
                        <img src={Etitle} alt='img-footer' className={Style.footer_img} />
                        <h1 className={Style.footer_h1}>ETLAS</h1>
                    </Box>
                    <Box sx={{ width: '80px', height: '1px', background: '#003441' }}></Box>
                    <p className={Style.footer_prag1}> You can download the app from the links below:</p>
                    <Box className={Style.download}>
                        <a href='##'>
                            <img src={Play} alt='download-with-play-store' className={Style.download_btn} />
                        </a>
                        <a href='##'>
                            <img src={App} alt='download-with-play-store' className={Style.download_btn} />
                        </a>
                    </Box>
                </Stack>
                <Stack className={Style.footer_sec2}></Stack>
                <Stack className={Style.footer_sec3}>
                    <Stack direction='row' gap='20px'>
                        <ul>
                            Mapping
                            <li>{backToSec2 && (<a href ='##' onClick={() => scrollUpSec2()}>Why our Application?</a>)} </li>
                            <li>{backToSec3 && (<a href ='##' onClick={() => scrollUpSec3()}>Know History </a> )} </li>
                            <li>{backToSec4 && (<a href ='##' onClick={() => scrollUpSec4()}>Tours</a> )}</li>
                            <li>{backToSec5 && (<a href ='##' onClick={() => scrollUpSec5()}>Articles</a> )}</li>
                            <li><Link to='/knowledge' >Knowledge Check</Link></li>
                        </ul>
                        <ul>
                            Language
                            <li><a href='##' >English</a></li>
                            <li><a href='##' >العربية</a></li>
                            <li><a href='##' >Española</a></li>
                            <li><a href='##' >Française</a></li>
                        </ul>
                    </Stack>
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