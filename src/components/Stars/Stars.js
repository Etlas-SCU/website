import React from 'react';
import Style from './Stars.module.css'
import {Box} from '@mui/material' 
import {MdStarOutline , MdStar , MdStarHalf} from 'react-icons/md'


function EmptyStar(){
    return(
        <MdStarOutline></MdStarOutline>
    )
}

function HalfStar(){
    return(
        <MdStarHalf></MdStarHalf>
    )
}

function FullStar(){
    return(
        <MdStar></MdStar>
    )
}


export default function Stars({rating = 3}) {
    let Stars = [] ;
    let StarsCount = 5 ;
    while(StarsCount--){
        if(Math.floor(rating) >= 1){
            Stars.push(<FullStar key={StarsCount} />) ;
        }else if(Math.round(rating) === 1){
            Stars.push(<HalfStar key={StarsCount} />) ;
        }else{
            Stars.push(<EmptyStar key={StarsCount} />) ;
        }
        rating-- ;
    }
    
    return (
        <Box className={Style.star}>
           {Stars}
        </Box>
    );
}
