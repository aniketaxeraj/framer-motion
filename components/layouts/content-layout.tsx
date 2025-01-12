import React from "react";
import { Card } from "@/components/ui/card";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className="min-h-screen bg-purple-50 flex items-start justify-center px-4 py-8">
      <Card className="w-full max-w-md bg-white shadow-sm rounded-md px-6">
        {children}
      </Card>
    </div>
  );
};

export default ContentLayout;
