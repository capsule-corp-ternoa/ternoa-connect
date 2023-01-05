import { WALLETS_LIST } from '../../constants'
import { useTernoaConnect } from '../../hooks/useTernoaConnect'
import { WalletKeyType } from '../../types'
import { WalletItem } from '../WalletItem'
import styles from './styles'

export function WalletList() {
  const { currentActiveWallet, selectWallet } = useTernoaConnect()

  return (
    <div style={styles.container}>
      {Object.keys(WALLETS_LIST).map((key) => {
        const wallet = WALLETS_LIST[key as WalletKeyType]
        const isActiveWallet = currentActiveWallet?.key === key || false

        return (
          <div key={wallet.key}>
            <WalletItem
              {...wallet}
              isActive={isActiveWallet}
              onSelect={() => selectWallet(wallet.key)}
            />
          </div>
        )
      })}
    </div>
  )
}
