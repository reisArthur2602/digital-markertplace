import { SectionHeader } from "@/components/ui/section-header";
import { SellForm } from "./form";

export const SellPage = () => {
  return (
    <section>
      <SectionHeader
        title="Vender"
        subtitle="Venda seus produtos digitais aqui."
      />
      <SellForm />
    </section>
  );
};
