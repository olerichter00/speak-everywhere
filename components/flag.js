import React from "react"
import classNames from "classnames"

import styles from "../styles/flag.module.scss"

const Flag = ({ name }) => (
  <i className={classNames(styles.flag, styles[name])} />
)

export default Flag
