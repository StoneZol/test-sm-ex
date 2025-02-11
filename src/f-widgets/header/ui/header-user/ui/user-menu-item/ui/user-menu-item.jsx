import styles from './user-menu-item.module.scss'

import React from 'react'

export default function UserMenuItem({text = '', func, Icon}) {
  return (
    <button className={styles.button} onClick={func}><Icon/></button>
  )
}
