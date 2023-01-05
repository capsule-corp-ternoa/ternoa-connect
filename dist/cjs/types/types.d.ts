export declare type HexType = `0x${string}`;
export declare type ViewsKeyType = 'EXTENSIONS' | 'ACCOUNTS' | 'WALLETS';
export declare type ViewsType = {
    [key in ViewsKeyType]: string;
};
export declare type ExtensionKeyType = 'talisman' | 'polkadot-js' | 'subwallet-js';
export declare type ExtensionListType = {
    [key in ExtensionKeyType]: ExtensionItemType;
};
export declare type ExtensionItemType = {
    name: string;
    logo: string;
    download_url: string;
    documentation_url: string;
};
export declare type WalletKeyType = 'ternoa';
export declare type WalletListType = {
    [key in WalletKeyType]: WalletItemType;
};
export declare type WalletItemType = {
    key: WalletKeyType;
    name: string;
    logo: string;
};
declare global {
    interface Window {
        injectedWeb3: any;
    }
}
