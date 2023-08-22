import { Wrapper } from "@/components/Wrapper";
import { Banner } from "@/components/Banner";
import { StepCard } from "@/components/StepCard";
import { Actions } from "@/components/Actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 py-6 px-4">
      <Wrapper title="Banner">
        <Banner title="Título" text="Texto..." />
      </Wrapper>

      <Wrapper title="Step Card">
        <StepCard title="Página" completed={false} />
        <StepCard title="Página" completed />
      </Wrapper>

      <Wrapper title="Actions">
        <Actions />
      </Wrapper>
    </main>
  );
}
