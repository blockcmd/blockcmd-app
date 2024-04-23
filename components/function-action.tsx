"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { zxstimAbi } from "@/components/abis";
import { serialize, deserialize } from 'wagmi'
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { set } from "idb-keyval"

interface FunctionObject {
  name: string,
  inputs: any,
  outputs: any,
  stateMutability: string,
  type: string,
}

export default function FunctionAction() {
  const searchParams = useSearchParams()
  const functionName = searchParams.get('functionName')
  const functionIndex = searchParams.get('functionIndex')
  const functionObjects: FunctionObject[] = zxstimAbi.filter((functionObject) => functionObject.type === 'function') as FunctionObject[]
  const [fetch, setFetch] = useState<boolean>(false)
  const [result, setResult] = useState<any>("n/a")
  const [args, setArgs] = useState<any>([])

  //  0x0614c46364aE6a98938d551bCa8d0CCA46e86576

  useEffect(() => {
    setFetch(false)
    setArgs([])
  }, [functionName])

  // useContractRead hook to read data from the contract
  const { data: readData, isError: readError, isPending: readPending, isSuccess: readSuccess } = useReadContract({
    address: '0xfbafe784a4ee4fb559636cec7f760158ea90f86f',
    abi: zxstimAbi,
    functionName: functionName as "symbol" | "allowance" | "owner" | "balanceOf" | "decimals" | "name" | "paused" | "totalSupply" | undefined,
    query: {
      enabled: fetch,
    },
    args: args,
  })

  useEffect(() => {
    if (readSuccess) {
      setFetch(false)
    }
  }, [readSuccess])
  
  // useContractWrite hook to write data to the contract
  const { data: writeData, isPending: writePending, writeContract } = useWriteContract()

  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ 
    hash: writeData, 
  })

  function clearData() {
    setFetch(false)
    setArgs([])
  }

  // this function allows arguments to be added to the args state
  function handleArgsChange(e: any, index: number) {
    // create a copy of the inputs state
    const argsList = [...args]
    // update the list with the new value
    argsList[index] = e.target.value
    // update the state with the new list
    setArgs(argsList)
  }

  return (
    <div className="w-full border-2 p-4 rounded-md">
      {
        // show the functionObject at the functionIndex
        functionName ? (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h3 id={functionName} className="scroll-m-20 text-2xl font-semibold tracking-tight">{functionName}</h3>
              <Separator />
              <h3>Inputs:</h3>
              {
                functionObjects[Number(functionIndex)].stateMutability === 'view' && functionObjects[Number(functionIndex)].inputs.length == 0 
                ? (
                  <div className="flex flex-col gap-4">
                    <p>No inputs required</p>
                    <Button onClick={() => setFetch(true)} className="w-fit font-mono">Read</Button>
                  </div>
                ) 
                : functionObjects[Number(functionIndex)].stateMutability === 'view' && functionObjects[Number(functionIndex)].inputs.length !== 0 
                ? (
                  <div className="flex flex-col gap-4">
                    {
                      functionObjects[Number(functionIndex)].inputs.map((input: any, index: number) => (
                        <div key={index} className="grid grid-cols-5 gap-2 items-center">
                          <Label className="font-mono" htmlFor={input.name}>{input.name}</Label>
                          <Input
                            type="text"
                            id={input.name}
                            name={input.name}
                            placeholder={input.type}
                            className="col-span-4 border-2 p-2 rounded-md w-full"
                            onChange={(e: any) => handleArgsChange(e, index)}
                          />
                        </div>
                      ))
                    }
                    <Button onClick={() => setFetch(true)} className="w-fit font-mono">Read</Button>
                  </div>
                )
                : (
                  <div className="flex flex-col gap-4">
                    {
                      functionObjects[Number(functionIndex)].inputs.map((input: any, index: number) => (
                        <div key={index} className="grid grid-cols-5 gap-2 items-center">
                          <Label className="font-mono" htmlFor={input.name}>{input.name}</Label>
                          <Input
                            type="text"
                            id={input.name}
                            name={input.name}
                            placeholder={input.type}
                            className="col-span-4 border-2 p-2 rounded-md w-full"
                            onChange={(e) => handleArgsChange(e, index)}
                          />
                        </div>
                      ))
                    }
                  <Button className="w-fit font-mono">Write</Button>
                </div>
                )
              }
              <Separator />
              <h3>Outputs:</h3>
              {
                functionObjects[Number(functionIndex)].stateMutability === 'view'
                ? (
                    readPending
                    ? <Skeleton className="h-4 w-[100px]" /> 
                    : (
                        <div className="flex flex-row gap-2 items-center">
                          <Badge className="h-fit w-fit font-mono">{functionObjects[Number(functionIndex)]?.outputs?.[0]?.type ?? "n/a"}</Badge>
                          <Separator orientation="vertical" />
                          <p className="border-2 p-2 rounded-md w-full">{readData?.toString() ?? "n/a"}</p>
                        </div>
                      )
                )
                : (
                  writePending
                  ? (
                    <div className="flex flex-row gap-2">
                      <Skeleton className="h-4 w-[70px]" />
                      <p>Please confirm the transaction with your connected wallet</p> 
                    </div>
                    
                  )
                  
                  : (
                      <div className="flex flex-row gap-2 items-center">
                        <Badge className="h-fit w-fit font-mono">hash</Badge>
                        <Separator orientation="vertical" />
                        <p className="border-2 p-2 rounded-md w-full">{result}</p>
                      </div>
                    )
                )
              }
              <Button onClick={clearData} className="w-fit font-mono">Clear</Button>
            </div>
          </div>
        ) : (
          <h3 className="scroll-m-20 text-md font-semibold tracking-tight">No function selected</h3>
        )
      }
    </div>
  )
}