"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

type Props = {
  url: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CalendlyBtn = ({ children, className = "", url, ...props }: Props) => {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("root");
    if (el) setRootEl(el);
  }, []);

  const classes = `${className}`;

  return (
    <>
      {rootEl ? (
        <PopupButton
          className={classes}
          url={url}
          rootElement={rootEl}
          text={children as string}
          {...props}
        />
      ) : (
        <button className={classes} {...props}>
          {children}
        </button>
      )}
    </>
  );
};

export default CalendlyBtn;
