import MobileWarning from '@/components/mobile-warning';

export default function InspectLayot({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="hidden lg:flex lg:flex-col lg:gap-12 w-[1280px]">
        {children}
      </div>
      <MobileWarning />
    </div>
  )
  

}