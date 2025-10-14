import Header from "./Header";
import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col gap-10 min-h-screen w-full">
      <Header />
      <main className="flex-1 px-4 pt- md:pt-0 lg:px-20">{children}</main>
    </div>
  );
};

export default PageLayout;
