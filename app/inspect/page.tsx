import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Chains, Chain } from "./data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-12 w-[768px]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Inspect
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Inspect</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p>Read and write on any contracts with custom ABIs</p>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          My setup
        </h2>
        <div className="flex flex-col gap-4 w-[300px]">
          <Button
            variant="secondary"
            asChild
            className="w-full hover:outline hover:outline-offset-1 hover:outline-2"
          >
            <Link
              href="/my-contract-book"
              className="flex flex-row items-center justify-between"
            >
              My contract book <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Select a chain
        </h2>
        <div className="flex flex-col gap-4 w-[768px]">
          {Chains.map((chain: Chain) => (
            <Link
              key={chain.name}
              className="flex flex-row justify-between items-center border-2 border-primary hover:bg-primary hover:text-secondary p-4 w-full"
              href={chain.symbol}
            >
              <p>{chain.name}</p>
              <ArrowRight />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
