"use client";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "outlined";
  size?: "sm" | "md";
  className?: string;
}

export default function Tag({
  children,
  variant = "outlined",
  size = "sm",
  className = "",
}: TagProps) {
  const baseClasses = "rounded-full font-medium border transition-colors";

  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
  };

  const variantClasses = {
    default: "bg-[#84cc16] text-white border-[#84cc16]",
    outlined: "bg-transparent text-[#4a5568] border-[#84cc16]",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return <span className={combinedClasses}>{children}</span>;
}
