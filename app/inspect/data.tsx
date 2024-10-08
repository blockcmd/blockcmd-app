export type Chain = {
  id: number
  name: string
  symbol: string
  networkId: string
  blockExplorer: string
};

export const Chains: Chain[] = [
  {
    id: 1,
    name: "Kaia",
    symbol: "inspect/kaia",
    networkId: "8217",
    blockExplorer: "https://klaytnfinder.io/",
  },
  {
    id: 2,
    name: "Kaia Kairos",
    symbol: "inspect/kaia-kairos",
    networkId: "1001",
    blockExplorer: "https://klaytnfinder.io/",
  },
];