"use client";

import FunctionDashboard from "@/components/function-dashboard";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useParams } from "next/navigation";
import { del, get, set } from "idb-keyval";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ContractEntry } from "@/components/contract-management";


export default function Page( { params }: { params: { address: string, abi: string } }) {
  const [abi, setAbi] = useState("");

  useEffect(() => {
    if (params.abi === "temporary-abi") {
      get(params.abi).then((tempAbi) => setAbi(JSON.parse(tempAbi)));
    } else {
      get("saved_contracts").then((savedContracts) => {
        let selectedContract = savedContracts.find((contract: ContractEntry) => (contract.id === params.abi)).abi;
        setAbi(JSON.parse(selectedContract || ""));
        });
      }
  }, [params.abi]);

  return (
    <div className="flex flex-col gap-12">
      <ConnectButton />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Kaia Kairos</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/kaia-kairos">Kaia Kairos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/kaia-kairos/address/${params.address}`}>{params.address}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{params.abi}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Functions</h2>
        {abi && <FunctionDashboard abi={abi} />}
      </div>
    </div>
  );
}
