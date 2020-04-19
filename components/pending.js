import React from "react"
import { Loader } from "semantic-ui-react"

import styles from "../styles/pending.module.scss"

const Pending = () => (
  <div className={styles.pending}>
    <Loader active inline="centered">
      Getting your current location...
    </Loader>
  </div>
)

export default Pending
