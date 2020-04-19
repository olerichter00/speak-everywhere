import React from "react"
import classNames from "classnames"
import styles from "../styles/button.module.scss"

const Button = ({
  primary = false,
  fluid = false,
  children,
  ...other
} = {}) => {
  const classes = classNames(styles.button, {
    [styles.primary]: primary,
    [styles.fluid]: fluid,
  })

  return (
    <button className={classes} {...other}>
      {children}
    </button>
  )
}

export default Button
