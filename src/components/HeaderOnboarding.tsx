"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

type HeaderOnboardingProps = {
  breadcrumb_links: { path: string; label: string }[];
};

export const HeaderOnboarding = ({
  breadcrumb_links,
}: HeaderOnboardingProps) => {
  const isActive = usePathname();
  const isLast = (index: number) => index === breadcrumb_links.length - 1;

  return (
    <header className="border-b px-8 py-6 text-sm">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumb_links.map((b, index) => (
            <Fragment key={b.label}>
              {isActive === b.path ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>{b.label}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={b.path}>{b.label}</BreadcrumbLink>
                  </BreadcrumbItem>
                  {!isLast(index) && <BreadcrumbSeparator />}
                </>
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};
