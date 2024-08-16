import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AirdropERC20 } from "@/components/airdrop-erc20";
import { Address } from "viem";

export default function Page({ params }: { params: { address: Address } }) {
  return (
    <div className="flex flex-col gap-12">
      <ConnectButton />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/drop">Drop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/drop/erc20">ERC20 Token</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <AirdropERC20 address={params.address} />
    </div>
  );
}
