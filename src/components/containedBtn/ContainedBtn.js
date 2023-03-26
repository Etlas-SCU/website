import Box from '@mui/material/Box'
import React from 'react'
import styles from "./ContainedBtn.module.css"

export default function ContainedBtn({width,children}) {
  return (
    <Box sx={{width}} className={styles.contBTn}>{children}</Box>
  )
}
