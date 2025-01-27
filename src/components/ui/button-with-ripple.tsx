import React from "react";
import { Button, ButtonProps } from "./button";

export interface ButtonWithRippleProps extends ButtonProps {
  className?: string;
}

const ButtonWithRipple = React.forwardRef<
  HTMLButtonElement,
  ButtonWithRippleProps
>(({ className, onClick, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      ref={ref}
      className={`relative overflow-hidden ${className || ""}`}
      onClick={handleClick}
      {...props}
    />
  );
});

ButtonWithRipple.displayName = "ButtonWithRipple";

export { ButtonWithRipple };
