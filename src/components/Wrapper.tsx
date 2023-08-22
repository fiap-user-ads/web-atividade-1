import { ReactNode } from "react";

interface WrapperProps {
  title: string;
  children: ReactNode;
}

export function Wrapper({ title, children }: WrapperProps) {
  return (
    <div className="border-2 p-4 border-gray-900 bg-zinc-950 rounded-xl flex flex-col gap-5 max-w-sm w-full">
      <h1 className="text-white text-2xl font-semibold">{title}</h1>
      {children}
    </div>
  );
}
