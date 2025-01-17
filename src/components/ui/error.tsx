import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const errorVariants = cva(
  "rounded-lg border p-4",
  {
    variants: {
      variant: {
        default: "bg-destructive/15 text-destructive border-destructive/50",
        info: "bg-blue-500/15 text-blue-500 border-blue-500/50",
        warning: "bg-yellow-500/15 text-yellow-500 border-yellow-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Error = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof errorVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(errorVariants({ variant }), className)}
    {...props}
  />
))
Error.displayName = "Error"

const ErrorTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
ErrorTitle.displayName = "ErrorTitle"

const ErrorDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
ErrorDescription.displayName = "ErrorDescription"

export { Error, ErrorTitle, ErrorDescription }
