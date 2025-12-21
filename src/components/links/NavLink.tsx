"use client";
import { usePathname } from "next/navigation";
import * as React from "react";

import clsxm from "@/lib/clsxm";

import UnstyledLink, {
  UnstyledLinkProps,
} from "@/components/links/UnstyledLink";

type NavLinkProps = UnstyledLinkProps;

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, className, ...rest }, ref) => {
    const pathname = usePathname();
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "relative w-max text-foreground transition-all duration-200",
          "after:absolute after:bottom-0 after:right-0",
          "after:h-[2px] after:w-0",
          "after:bg-[#7209b7] after:transition-all after:duration-200",
          "hover:after:left-0 hover:after:right-auto hover:after:w-full",
          "focus:after:left-0 focus:after:right-auto focus:after:w-full",
          pathname === rest.href && "after:left-0 after:w-full",
          className,
        )}
      >
        {children}
      </UnstyledLink>
    );
  },
);

export default NavLink;
