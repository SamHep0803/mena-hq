import React from "react";

interface DividerProps {
}

export const Divider: React.FC<DividerProps> = ({}) => {
  return <div className="border-b border-stone-700" />;
};
