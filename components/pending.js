import React from "react"
import { Loader } from "semantic-ui-react"

import styles from "../styles/pending.module.scss"

const Pending = ({ text }) => (
  <div className={styles.pending}>
    <Loader active inline="centered">
      {text}
    </Loader>
  </div>
)

export default Pending
