import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 items-center self-center">
      <div className="flex flex-row gap-4 items-center">
        <Image
          src="/blockcmd-logo.svg"
          alt="BlockCMD Logo"
          width={1200}
          height={250}
          className="w-[300px] h-[62.5px]"
        />
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Command your blocks
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 w-96">
        Explore blockchains with an intuitive product suite that puts you on the
        cutting edge of technology.
      </p>
      <Button asChild>
        <a href="https://x.com/blockcmdHQ" target="_blank">
          Stay updated
        </a>
      </Button>
      <div className="flex flex-col gap-12 w-[400px]">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Tools
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <Link
              className="flex flex-row justify-between items-center border-2 border-primary hover:bg-primary hover:text-secondary p-4 w-full"
              href="/inspect"
            >
              <p>Inspect</p>
              <ArrowRight />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              className="flex flex-row justify-between items-center border-2 border-primary hover:bg-primary hover:text-secondary p-4 w-full"
              href="/drop"
            >
              <p>Drop</p>
              <ArrowRight />
            </Link>
          </div>
        </div>
        {/* <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Utilities
        </h2>
        <div className="flex flex-col gap-4">
          <Link
            className="flex flex-row justify-between items-center border-2 border-primary hover:bg-primary hover:text-secondary p-4 w-full"
            href="/my-contract-book"
          >
            <p>My contract book</p>
            <ArrowRight />
          </Link>
          <Button
            variant="secondary"
            asChild
            className="w-full hover:outline hover:outline-offset-1 hover:outline-2"
          >
            <Link
              href="/converter"
              className="flex flex-row items-center justify-between"
            >
              Converter <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
