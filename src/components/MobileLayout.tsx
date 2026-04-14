import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
  className?: string;
}

const MobileLayout = ({ children, className = "" }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className={`w-full max-w-[430px] min-h-[90vh] relative overflow-hidden rounded-2xl shadow-card ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
