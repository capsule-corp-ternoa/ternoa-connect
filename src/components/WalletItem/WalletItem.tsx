import React, { useState } from 'react'
import styles from './styles'
import { IWalletItem } from './types'

export function WalletItem({
  name,
  logo,
  isActive,
  onSelect,
  key,
}: IWalletItem) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isActive
          ? '#3817B8'
          : isHover
          ? 'rgba(56, 23, 184, 0.3)'
          : '#000',
      }}
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
      onClick={onSelect}
    >
      <div style={styles.extensionInfo}>
        <img src={logo} style={styles.logo} />
        <h1 style={styles.extensionName}>{name}</h1>
      </div>
    </div>
  )
}
