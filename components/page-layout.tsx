import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({
  children,
  className,
}: PageLayoutProps) {
  return (
    <div className={cn("relative flex min-h-screen flex-col bg-[#1F1F1F]", className)}>
      <main className="relative flex min-h-[100vh] flex-1 flex-col" role="main">
        {children}
      </main>
    </div>
  );
}