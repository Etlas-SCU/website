import { Box, Stack } from '@mui/material'
import React from 'react'
import style from './KnowledgeCheck.module.css'
import statues from '../../images/Pics/statues.png'
import landmarks from '../../images/Pics/landmarks.png'
import monuments from '../../images/Pics/monuments.png'



export default function KnowledgeCheck() {
    const categories=[
        {
            id:1,
            title:"Statues",
            dis:"Test yourself in the mostpopular statues.",
            score:"7/60",
            img:landmarks  
        },
        {
            id:2,
            title:"Monuments",
            dis:"The world of monuments is in your mind, time to test",
            score:"50/107",
            img:monuments  

        }, 
         {
            id:3,
            title:"Landmarks",
            dis:"of course you know alot of landmarks, let’s try.",
            score:"12/69",
            img:statues    

        }
    ]
  return (
    <Box pb="95px">
        <Box pt="120px">
            <h2 className={style.title}>Knowledge Check</h2>
        </Box>

        <Stack direction="row" justifyContent="center" gap="40px" flexWrap= "wrap">
            {categories.map((cat)=>{
            
              return(
                <Box className={style.cat} key={cat.id}>
                   <h4 className={style.cat__title}>{cat.title}</h4>
                   <p className={style.cat__dis}>{cat.dis}</p>
                   <Box className={style.cat__pan}>
                    <img src={cat.img} alt={cat.title} />
                    <p>{cat.score}</p>
                   </Box>
                </Box>
              )

            })}
        </Stack>

      
    </Box>
  )
}
