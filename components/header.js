import React from "react"
import classNames from "classnames"

import styles from "../styles/header.module.scss"

const Header = ({ extended }) => {
  const headerClasses = classNames(styles.header, {
    [styles.extendedHeader]: extended,
  })
  return (
    <div className={headerClasses}>
      <a className={styles.title} onClick={() => window.location.reload()}>
        <img
          className={styles.logo}
          src="logo_white.png"
          alt="SpeakEverywhere"
        />
      </a>
    </div>
  )
}

export default Header
