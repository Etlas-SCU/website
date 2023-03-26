import { Stack } from '@mui/material'
import React from 'react'
import Search from '../../images/Icons/Search.png'
import styles from "./SearchInput.module.css"

export default function SearchInput() {
  return (
    <Stack className={styles.search} direction='row' position="relative" width="fit-content">
    <input
      type='search'
      placeholder='Search for monuments, statues, landmarks and more!'
      name='search'
      className={styles.search_input} />
    <img src={Search} className={styles.search_icon} alt='search' />
  </Stack>
  )
}

