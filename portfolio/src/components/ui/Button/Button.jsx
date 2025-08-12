import "./Button.css";

export function Button({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  const baseClass = "btn";
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
