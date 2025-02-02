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
  { name: "Vender produto", icon: ShoppingBag, path: "/products/sell" },
  { name: "Meus produtos", icon: Globe, path: "/products" },
  { name: "Configurações", icon: Settings2, path: "/settings" },
  { name: "Pagamentos", icon: DollarSignIcon, path: "/payment" },
];
