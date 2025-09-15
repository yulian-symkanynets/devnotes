import React from "react";
import "@fontsource/rubik/500.css";
import "./Button.css";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={[
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth ? "btn--full" : "",
        className,
      ].join(" ")}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-live="polite"
      {...props}
    >
      {loading ? (
        <>
          <span className="btn__spinner" aria-hidden />
          <span className="btn__label">{children}</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="btn__icon">{leftIcon}</span>}
          <span className="btn__label">{children}</span>
          {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
