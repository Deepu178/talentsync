"use client";
import { getCalApi } from "@calcom/embed-react";
import * as React from "react";
import { useEffect } from "react";

import { Button, ButtonProps } from "./ui/button";

const CalBtn = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children = "Schedule A Call", ...props }, ref) => {
    useEffect(() => {
      (async function () {
        const cal = await getCalApi();
        cal("ui", {
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })();
    }, []);

    return (
      <Button
        data-cal-link="deependra-kumar-4pxcer/30min"
        data-cal-config='{"layout":"month_view"}'
        {...props}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);

export default CalBtn;
