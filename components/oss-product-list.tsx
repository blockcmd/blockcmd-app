import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function OssProductList() {

  return (
    <>
      <div className="flex flex-col gap-4 text-left divide-y-2 divide-primary">
        <div className="flex flex-col gap-2 pt-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">ScanCMD</h3>
          <div className="flex flex-row gap-8">
            <a href="https://github.com/blockcmd/scans-ts" target="_blank" className="text-blue-600 flex flex-row gap-2 w-fit leading-7"><Image src="/typescript.svg" alt="typescript" width={20} height={20} />TypeScript<span><ExternalLink className="w-6 h-6"/></span></a>
            <a href="https://github.com/blockcmd/scans-py" target="_blank" className="text-blue-600 flex flex-row gap-2 w-fit leading-7"><Image src="/python.svg" alt="python" width={20} height={20} />Python<span><ExternalLink className="w-6 h-6"/></span></a>
            <a href="https://github.com/blockcmd/scans-rs" target="_blank" className="text-blue-600 flex flex-row gap-2 w-fit leading-7"><Image src="/rust.svg" alt="rust" width={20} height={20} />Rust<span><ExternalLink className="w-6 h-6"/></span></a>
          </div>
          <p className="leading-7">Library to query all the block explorers</p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex flex-row gap-2 items-center">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">FiCMD</h3>
            <p className="bg-muted-foreground w-fit text-secondary px-2 py-0 rounded-md">coming soon</p>
          </div>
          <p className="leading-7">Pay, get paid in crypto and offramp</p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex flex-row gap-2 items-center">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">DexCMD</h3>
            <p className="bg-muted-foreground w-fit text-secondary px-2 py-0 rounded-md">coming soon</p>
          </div>
          <p className="leading-7">Trade and manage your LP positions</p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex flex-row gap-2 items-center">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">EarnCMD</h3>
            <p className="bg-muted-foreground w-fit text-secondary px-2 py-0 rounded-md">coming soon</p>
          </div>
          <p className="leading-7">Track your crypto assets on multiple chains</p>
        </div>
      </div>
    </>
  )
}