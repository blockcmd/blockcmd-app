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

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
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
  );
}
