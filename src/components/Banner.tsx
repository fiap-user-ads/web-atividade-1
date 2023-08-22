interface BannerProps {
  title: string;
  text: string;
}

export function Banner({ title, text }: BannerProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-semibold text-zinc-300">{title}</h1>
      <p className="text-xl text-zinc-400">{text}</p>
    </div>
  );
}
