import * as React from "react";

import clsxm from "@/lib/clsxm";

import UnstyledLink, {
  UnstyledLinkProps,
} from "@/components/links/UnstyledLink";

const FooterLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "inline-flex items-center text-muted-foreground",
          "focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2",
          "font-medium",
          "text-base transition-all duration-200 hover:text-foreground focus:text-foreground",
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default FooterLink;
