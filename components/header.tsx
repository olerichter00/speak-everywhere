import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import styles from '../styles/header.module.scss'

type Props = {
  extended?: boolean
}

const Header: React.FC<Props> = ({ extended = false } = {}) => {
  const router = useRouter()

  const headerClasses = classNames(styles.header, {
    [styles.extendedHeader]: extended,
  })

  const onLogoClick = () =>
    router.pathname === '/' ? window.location.reload() : router.push('/')

  return (
    <div className={headerClasses}>
      <a className={styles.logoContainer} onClick={onLogoClick}>
        <img
          className={styles.logo}
          src="logo_white.png"
          alt="Speak Everywhere"
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
