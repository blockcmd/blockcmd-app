import OssProductList from "@/components/oss-product-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {

  return (
    <div className="flex flex-col max-w-3xl gap-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-left">OSS Products</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>OSS</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className=" text-left leading-7 [&:not(:first-child)]:mt-6 ">BlockCMD firmly believes that open source software will change the world. We build and contribute to products that push the boundry of possiblity, even when there is no direct commercial incentive. Explore our products below.</p>
      <div className="flex flex-col text-center max-w-3xl gap-4">
        <OssProductList />
      </div>
    </div>
  );
}