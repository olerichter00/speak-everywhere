import React from "react"

import styles from "../styles/header.module.scss"

const Header = () => (
  <div className={styles.header}>
    <a className={styles.title} onClick={() => window.location.reload()}>
      <img className={styles.logo} src="logo_white.png" alt="SpeakEverywhere" />
    </a>
  </div>
)

export default Header
