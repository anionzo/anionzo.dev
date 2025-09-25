"use client";

import { ReactNode } from "react";

interface NotionCalloutProps {
  emoji: string;
  children: ReactNode;
}

export const NotionCallout = ({ emoji, children }: NotionCalloutProps) => {
  return (
    <div className="p-2 mb-4 flex items-center border-gray-300 bg-gray-100 rounded-lg dark:border-gray-500 dark:bg-gray-800">
      <span className="text-2xl mr-2 text-gray-500 dark:text-gray-400">
        {emoji ?? "💡"}
      </span>
      <span className="p-2 text-left">{children}</span>
    </div>
  );
};
