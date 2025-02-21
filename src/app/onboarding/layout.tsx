import { Logo } from "@/components/Logo";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Globe, Home, Settings2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const NAV_LINKS_SECTIONS = [
  {
    title: "Aplicação",
    links: [
      {
        label: "Início",
        path: "/onboarding",
        icon: Home,
      },
      {
        label: "Vender Produtos",
        path: "/onboarding/sell",
        icon: ShoppingBag,
      },
      {
        label: "Minhas Compras",
        path: "/onboarding/shopping",
        icon: Globe,
      },
    ],
  },
  {
    title: "Configurações",
    links: [
      {
        label: "Configurações da Conta",
        path: "/onboarding/settings",
        icon: Settings2,
      },
    ],
  },
];

const OnboardingLayout = async ({ children }: PropsWithChildren) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) redirect("/");

  return (
    <div className="grid h-full grid-cols-[380px_1fr] overflow-hidden">
      <aside className="flex flex-col border-r bg-zinc-50 text-sm text-zinc-700">
        <header className="border-b px-8 py-6">
          <Logo />
        </header>

        <nav className="space-y-6 px-8 py-6">
          {NAV_LINKS_SECTIONS.map((s) => (
            <div className="space-y-1.5" key={s.title}>
              <span className="text-xs font-medium capitalize text-zinc-400">
                {s.title}
              </span>
              {s.links.map((l) => (
                <Link
                  href={l.path}
                  key={l.path}
                  className="flex items-center gap-x-2 rounded-sm p-1.5"
                >
                  <l.icon size={16} className="text-zinc-400" />
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default OnboardingLayout;
