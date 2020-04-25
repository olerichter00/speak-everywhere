import React, { useState } from "react"
import { Modal } from "semantic-ui-react"

import { Button } from "."

import styles from "../styles/select.module.scss"

const Select = ({
  title,
  setter,
  selected,
  trigger,
  options,
  hasShowAllButton,
  allOptions,
}) => {
  if (!selected) return <></>

  const [open, setOpen] = useState(false)
  const [showAllOptions, setshowAllOptions] = useState(false)

  const onSelect = (value) => {
    setter(value)

    onClose()
  }

  const onClose = () => {
    setOpen(false)
    setshowAllOptions(false)
  }

  const currentOptios = showAllOptions ? allOptions() : options

  const selectors = currentOptios.map(({ key, text }) => (
    <div className={styles.listItem} key={key}>
      <Button fluid key={key} onClick={() => onSelect(key)}>
        {text}
      </Button>
    </div>
  ))

  return (
    <Modal
      open={open}
      trigger={<a onClick={() => setOpen(true)}>{trigger}</a>}
      onClose={onClose}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content scrolling>
        <div className={styles.list}>{selectors}</div>

        {hasShowAllButton && !showAllOptions && (
          <div className={styles.listActions}>
            <Button primary onClick={() => setshowAllOptions(true)}>
              Show All
            </Button>
          </div>
        )}
      </Modal.Content>
    </Modal>
  )
}

export default Select
