import React from "react"
import classNames from "classnames"
import styles from "../styles/button.module.scss"

type Props = {
  primary?: boolean
  fluid?: boolean
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({
  primary = false,
  fluid = false,
  children = null,
  onClick = null,
} = {}) => {
  const classes = classNames(styles.button, {
    [styles.primary]: primary,
    [styles.fluid]: fluid,
  })

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
