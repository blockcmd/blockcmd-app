enum TokenType {
  ERC20 = "ERC20",
  ERC721 = "ERC721",
  ERC1155 = "ERC1155",
}

export type ContractBookEntry = {
  id: number
  name: string
  network: string
  address: string
  tokenType: TokenType
}

export const blockcmdContractBook: ContractBookEntry[] = [
  {
    id: 1,
    name: "Wrapped KLAY",
    network: "kaia-kairos",
    address: "0x043c471bEe060e00A56CcD02c0Ca286808a5A436",
    tokenType: TokenType.ERC20
  },
  {
    id: 2,
    name: "Wrapped KLAY",
    network: "kaia",
    address: "0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432",
    tokenType: TokenType.ERC20
  },
  {
    id: 3,
    name: "KOF Arena",
    network: "kaia",
    address: "0x8e4deb5c901ef81f43f6ca83a0fed5689cfdced3",
    tokenType: TokenType.ERC721
  },
  {
    id: 4,
    name: "AnimalsPunks V2",
    network: "kaia",
    address: "0x590744cb8cf1a698d7db509b52bf209e3cccb8e0",
    tokenType: TokenType.ERC721
  }
]