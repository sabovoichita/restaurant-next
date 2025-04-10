import React from "react";

const Button = ({
  variant = "default",
  size = "default",
  children,
  ...props
}) => {
  // Button styles based on variant and size
  const buttonStyles = {
    default: "bg-green-500 text-white hover:bg-green-600",
    orange: "bg-orange-500 text-white hover:bg-orange-600",
    input: "bg-white/5 text-white border border-white/10",
  };

  const sizeStyles = {
    default: "w-[170px] h-[62px] my-6",
    sm: "w-[150px] h-[58px]",
  };

  return (
    <button
      {...props}
      className={`${buttonStyles[variant]} ${sizeStyles[size]} inline-flex items-center justify-center whitespace-nowrap text-base font-semibold ring-offset-white transition-colors focus-visible:outline-none  focus-visible:ring-1 focus-visible:ring-orange  focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50`}
    >
      {children}
    </button>
  );
};

export default Button;
