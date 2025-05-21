import React from "react";
import { cn } from "@/lib/utils";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Icon = ({ children, className, ...props }: IconProps) => {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const RoundIcon = ({ children, className, ...props }: IconProps) => {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const ContactIcon = ({ children, className, ...props }: IconProps) => {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const SocialIcon = ({ children, className, ...props }: IconProps) => {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white transition",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
