import { ConnectButton } from "@rainbow-me/rainbowkit";
import AirdropErc20Card from "@/components/airdrop-erc20-card";
import AirdropNativeCard from "@/components/airdrop-native-card";
import AirdropNftsCard from "@/components/airdrop-nfts-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <div className="flex flex-col gap-12 w-[768px]">
      <ConnectButton />
      <div className="flex flex-col gap-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Drop
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Drop</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A simple tool to airdrop on EVM chains
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <AirdropNativeCard />
        <AirdropErc20Card />
        <AirdropNftsCard />
      </div>
    </div>
  );
}
