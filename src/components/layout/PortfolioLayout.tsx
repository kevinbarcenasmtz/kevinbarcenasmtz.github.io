// src/components/layout/PortfolioLayout.tsx
import React from "react";
import TableOfContents from "../sidebar/TableOfContents";
import MobileNav from "../sidebar/MobileNav";
import { TocItem } from "../../hooks/useToc";

type PortfolioLayoutProps = {
  isMobile: boolean;
  tocItems: TocItem[];
  activeIndex: number;
  children: React.ReactNode;
};

export default function PortfolioLayout({
  isMobile,
  tocItems,
  activeIndex,
  children,
}: PortfolioLayoutProps) {
  return (
    <div className="container">
      {isMobile ? (
        <MobileNav>
          <TableOfContents items={tocItems} activeIndex={activeIndex} />
        </MobileNav>
      ) : (
        <aside className="sidebar">
          <TableOfContents items={tocItems} activeIndex={activeIndex} />
        </aside>
      )}

      <main className="main">{children}</main>
    </div>
  );
}
