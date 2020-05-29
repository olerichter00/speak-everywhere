import React from "react"
import classNames from "classnames"

import styles from "../styles/flag.module.scss"
type Props = { name: string }

const Flag: React.FC<Props> = ({ name }) => (
  <i className={classNames(styles.flag, styles[name])} />
)

export default Flag
