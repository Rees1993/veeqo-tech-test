import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-2 text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // default:
        //   "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        light:
          "border-transparent text-[#05192D] bg-[#CCF7FC] shadow hover:bg-[#CCF7FC]/80",
        blue: "border-transparent text-[#05192D] bg-[#2578FF] shadow hover:bg-[#2578FF]/80",
        black:
          "border-transparent text-white bg-[#05192D] shadow hover:bg-[#05192D]/80",
        // outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "black",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
