import Box from '@mui/material/Box'
import React from 'react'
import styles from "./ContainedBtn.module.css"

export default function ContainedBtn({children}) {
  return (
    <Box className={styles.contBTn}>{children}</Box>
  )
}
