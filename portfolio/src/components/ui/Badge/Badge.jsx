import "./Badge.css";

export function Badge({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const baseClass = "badge";
  const variantClass = `badge--${variant}`;

  return (
    <span className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </span>
  );
}
