import React from "react";

export default function Button({ as = "button", className = "", children, ...props }) {
  const Comp = as;
  return (
    <Comp
      className={[
        "inline-flex items-center justify-center rounded-lg font-medium",
        "px-4 py-2 transition duration-300",
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </Comp>
  );
}
