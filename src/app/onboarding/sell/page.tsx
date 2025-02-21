import { HeaderOnboarding } from "@/components/HeaderOnboarding";

const Sell = () => {
  const breadcrumb_links = [
    {
      label: "Dashboard",
      path: "/onboarding",
    },
    {
      label: "Venda seu produto",
      path: "/onboarding/sell",
    },
  ];

  return (
    <div>
      <HeaderOnboarding breadcrumb_links={breadcrumb_links} />
      Sell
    </div>
  );
};
export default Sell;
