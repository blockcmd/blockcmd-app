import MobileWarning from '@/components/mobile-warning';

export default function InspectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="hidden lg:flex lg:flex-col lg:gap-12">
        {children}
      </div>
      <MobileWarning />
    </div>
  ) 
}