type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => {
  return (
    <header className="mb-6">
      <h1>{title}</h1>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </header>
  );
};
