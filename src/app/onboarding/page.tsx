import { HeaderOnboarding } from "@/components/HeaderOnboarding";

const Onboarding = () => {
  const breadcrumb_links = [
    {
      label: "Dashboard",
      path: "/onboarding",
    },
  ];

  return (
    <div>
      <HeaderOnboarding breadcrumb_links={breadcrumb_links} />
      Main
    </div>
  );
};
export default Onboarding;
