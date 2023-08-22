import Link from "next/link";

export function Actions() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Link
        href="/registro"
        className="flex items-center justify-center rounded outline-none border-2 border-[#0046C0] bg-transparent py-2 text-lg transition font-semibold text-white hover:bg-[#0046C0]/30 focus:bg-[#0046C0]/30"
      >
        Voltar
      </Link>

      <button className="flex items-center justify-center rounded outline-none bg-[#0046C0] py-2 text-lg font-semibold text-white transition hover:bg-[#0046C0]/80 focus:bg-[#0046C0]/80">
        Finalizar
      </button>
    </div>
  );
}
