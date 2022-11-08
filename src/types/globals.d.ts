export declare global {
  interface Window {
    ethereum?: {
      selectedAddress: string | null;
      networkVersion: number;
      on: (action: string, callback: (value: any) => unknown) => void;
    };
  }
}
