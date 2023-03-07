import React from 'react'
import styles from "./ContainedBtn.module.css"

export default function ContainedBtn({children}) {
  return (
    <div className={styles.contBTn}>{children}</div>
  )
}
