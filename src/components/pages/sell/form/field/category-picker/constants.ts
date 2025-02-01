import { CategoryTypes } from "@prisma/client";
import { Code, Globe, LucideIcon, Regex } from "lucide-react";

type CategoryCardData = {
  type: CategoryTypes;
  title: string;
  icon: LucideIcon;
};

export const CATEGORIES: CategoryCardData[] = [
  { title: "Templates", type: "TEMPLATE", icon: Code },
  { title: "Ícones", type: "ICONS", icon: Regex },
  { title: "UI Kits", type: "UIKITS", icon: Globe },
];
