export type HexType = `0x${string}`

export type ViewsKeyType = 'EXTENSIONS' | 'ACCOUNTS' | 'WALLETS'
export type ViewsType = {
  [key in ViewsKeyType]: string
}

export type ExtensionKeyType = 'talisman' | 'polkadot-js' | 'subwallet-js'
export type ExtensionListType = {
  [key in ExtensionKeyType]: ExtensionItemType
}
export type ExtensionItemType = {
  name: string
  logo: string
  download_url: string
  documentation_url: string
}

export type WalletKeyType = 'ternoa'
export type WalletListType = {
  [key in WalletKeyType]: WalletItemType
}
export type WalletItemType = {
  key: WalletKeyType
  name: string
  logo: string
}

declare global {
  interface Window {
    injectedWeb3: any
  }
}
