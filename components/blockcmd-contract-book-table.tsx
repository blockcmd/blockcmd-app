"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContractBookEntry } from "./blockcmd-contract-book";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

function convertStringToLowercase(text: unknown) {
  // Make sure text exists
  if (typeof text === "string") {
    return text.toLowerCase();
  } else {
    return undefined;
  }
}

const columns: ColumnDef<ContractBookEntry>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "tokenType",
    header: "Token Type",
  },
  {
    accessorKey: "network",
    header: "Network",
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      const entry = row.original;
      return (
        <a
          className="underline underline-offset-2 text-blue-500"
          target="_blank"
          href={`https://kaiascan.io/address/${entry.address}`}
        >
          {entry.address}
        </a>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <Button asChild>
          <Link
            href={`/drop/${convertStringToLowercase(row.getValue("tokenType"))}/${row.getValue("address")}`}
          >
            Go <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      );
    },
  },
];

export default function BlockcmdAddressBookTable({
  blockcmdContractBook,
}: {
  blockcmdContractBook: ContractBookEntry[];
}) {
  return <DataTable columns={columns} data={blockcmdContractBook} />;
}
