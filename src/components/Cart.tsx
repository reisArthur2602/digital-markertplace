import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { formatCurrencyBRL } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";

export const Cart = () => {
  const cartCount = 0;
  const isProductInCart = cartCount > 0;
  const fee = 2.45;
  return (
    <Sheet>
      <SheetTrigger className="flex items-center gap-2">
        <ShoppingCart aria-hidden="true" className="size-6" />
        <span className="text-sm font-medium">0</span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="space-y-2.5">
          <SheetTitle>Meu Carrinho ({cartCount})</SheetTitle>
        </SheetHeader>

        <Separator />

        {isProductInCart ? (
          <>
            <div className="flex w-full flex-col">
              <ScrollArea>Cart Item</ScrollArea>
            </div>

            <div className="mt-auto space-y-4 text-sm">
              <div className="space-y-1.5">
                <div className="flex">
                  <span className="flex-1">Taxa</span>
                  <span>{formatCurrencyBRL(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatCurrencyBRL(cartCount + fee)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Continue para finalizar a compra
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <div aria-hidden="true" className="relative size-56">
              <Image
                src="/bear-cart-empty.png"
                alt="empty shopping cart bear"
                fill
              />
            </div>
            <div className="text-xl font-semibold">Seu carrinho está vazio</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                })}
              >
                Adicione itens ao seu carrinho para finalizar a compra
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
