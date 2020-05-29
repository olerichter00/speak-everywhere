import React from 'react'
import { Loader } from 'semantic-ui-react'

import styles from '../styles/pending.module.scss'

type Props = {
  text: string
}
const Pending: React.FC<Props> = ({ text }) => (
  <div className={styles.pending}>
    <Loader active inline="centered">
      {text}
    </Loader>
  </div>
)

export default Pending
