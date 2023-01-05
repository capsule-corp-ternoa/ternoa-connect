import { WalletItemType } from '../../types';
export interface IWalletItem extends WalletItemType {
    isActive: boolean;
    onSelect: () => void;
}
