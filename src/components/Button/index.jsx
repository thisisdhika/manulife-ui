import React from 'react'
import { Button as BaseButton } from 'react-bootstrap'
import styles from './index.module.sass'

export const Button = ({ ...restProps }) => {
  return <BaseButton {...restProps} className={styles.wrapper} />
}

export default Button
