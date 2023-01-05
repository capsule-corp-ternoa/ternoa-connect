import Client from '@walletconnect/sign-client';
import { PairingTypes, SessionTypes } from '@walletconnect/types';
export declare const useWalletConnect: () => {
    client: Client | undefined;
    pairings: PairingTypes.Struct[];
    session: SessionTypes.Struct | undefined;
    address: string | undefined;
    isLoading: boolean;
    isInitializing: boolean;
    isAccountCertified: boolean;
    signMessage: () => Promise<void>;
    connect: (pairing: any) => Promise<SessionTypes.Struct | null>;
};
