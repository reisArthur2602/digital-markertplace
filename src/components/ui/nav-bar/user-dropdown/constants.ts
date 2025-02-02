import {
  DollarSignIcon,
  Globe,
  LucideIcon,
  Settings2,
  ShoppingBag,
} from "lucide-react";

type LinksUserDropdown = {
  name: string;
  path: string;
  icon: LucideIcon;
};

export const USER_DROPDOWN_LINKS: LinksUserDropdown[] = [
  { name: "Meus produtos", icon: Globe, path: "/auth/products" },
  { name: "Vender produto", icon: ShoppingBag, path: "/auth/products/sell" },
  { name: "Pagamentos", icon: DollarSignIcon, path: "/auth/payment" },
  { name: "Configurações", icon: Settings2, path: "/auth/settings" },
];
