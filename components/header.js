import React from "react"
import Link from "next/link"
import classNames from "classnames"
import { useRouter } from "next/router"

import styles from "../styles/header.module.scss"

const Header = ({ extended = false } = {}) => {
  const router = useRouter()

  const headerClasses = classNames(styles.header, {
    [styles.extendedHeader]: extended,
  })

  return (
    <div className={headerClasses}>
      <a
        className={styles.title}
        onClick={() =>
          router.pathname === "/" ? window.location.reload() : router.push("/")
        }
      >
        <img
          className={styles.logo}
          src="logo_white.png"
          alt="SpeakEverywhere"
        />
      </a>
      <div className={styles.about}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
