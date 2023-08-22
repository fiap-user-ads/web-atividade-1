import Link from "next/link";

import { ChevronRight, Circle, CheckCircle2 } from "lucide-react";

interface StepCardProps {
  to?: string;
  completed: boolean;
  title: string;
}

export function StepCard({ to, completed, title }: StepCardProps) {
  return (
    <Link
      // href={`/registro/${to}`}
      href={"/"}
      className="flex items-center gap-3 rounded-md border-2 border-gray-800 px-3 py-5 transition outline-none hover:border-[#0046C0] hover:bg-slate-950 focus:border-[#0046C0] focus:bg-slate-950"
    >
      <div>{!completed ? <Circle className="stroke-white" /> : <CheckCircle2 className="stroke-green-500" />}</div>

      <span className="w-full text-lg text-white">{title}</span>

      <div>
        <ChevronRight className="stroke-white" />
      </div>
    </Link>
  );
}
