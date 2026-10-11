import React from "react";

type PageContentProps = {
  children: React.ReactNode;
  className?: string;
};

/** Full-width page content with consistent horizontal padding */
export default function PageContent({
  children,
  className = "",
}: PageContentProps) {
  return (
    <div className={`w-full px-4 py-4 sm:px-5 sm:py-5 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
