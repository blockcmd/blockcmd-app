import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        <Link href="/drop/native">
          <div className="flex flex-row justify-between items-center shadow-lg w-full p-8 border-2 border-secondary hover:border-primary">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              Airdrop Native Token
            </h2>
            <ArrowRight className="w-8 h-8" />
          </div>
        </Link>
        <Link href="/drop/erc20">
          <div className="flex flex-row justify-between items-center shadow-lg w-full p-8 border-2 border-secondary hover:border-primary">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              Airdrop ERC20 Token
            </h2>
            <ArrowRight className="w-8 h-8" />
          </div>
        </Link>
        <Link href="/drop/erc721">
          <div className="flex flex-row justify-between items-center shadow-lg w-full p-8 border-2 border-secondary hover:border-primary">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              Airdrop ERC721 Token
            </h2>
            <ArrowRight className="w-8 h-8" />
          </div>
        </Link>
        <Link href="/drop/erc721">
          <div className="flex flex-row justify-between items-center shadow-lg w-full p-8 border-2 border-secondary hover:border-primary">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              Airdrop ERC1155 Token
            </h2>
            <ArrowRight className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </div>
  );
}
