// components/SectionTitle.tsx
export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="text-hcom-subtext mt-2">{subtitle}</p>}
    </div>
  );
}
