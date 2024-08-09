import MobileWarning from '@/components/mobile-warning';

export default function DropLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="hidden lg:flex lg:flex-col lg:gap-12">
        {children}
      </div>
      <MobileWarning />
    </div>
  ) 
}