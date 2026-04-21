import * as React from "react";
import { cn } from "@/lib/utils";

export interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ className, label, id, error, type = "text", ...props }, ref) => {
    const reactId = React.useId();
    const inputId = id ?? reactId;

    return (
      <div className="relative">
        <input
          id={inputId}
          ref={ref}
          type={type}
          placeholder=" "
          className={cn(
            "peer flex h-14 w-full rounded-md border border-input bg-background px-3 pt-5 pb-1 text-sm text-foreground shadow-sm transition-colors",
            "placeholder:text-transparent",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-input",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus:ring-destructive",
            className,
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground transition-all duration-200",
            "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium",
            "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium",
            error && "peer-focus:text-destructive peer-[:not(:placeholder-shown)]:text-destructive",
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);
FloatingLabelInput.displayName = "FloatingLabelInput";

export interface FloatingLabelTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: boolean;
}

const FloatingLabelTextarea = React.forwardRef<HTMLTextAreaElement, FloatingLabelTextareaProps>(
  ({ className, label, id, error, ...props }, ref) => {
    const reactId = React.useId();
    const inputId = id ?? reactId;

    return (
      <div className="relative">
        <textarea
          id={inputId}
          ref={ref}
          placeholder=" "
          className={cn(
            "peer flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 pt-6 pb-2 text-sm text-foreground shadow-sm transition-colors",
            "placeholder:text-transparent",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-input",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus:ring-destructive",
            className,
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute left-3 top-4 text-sm text-muted-foreground transition-all duration-200",
            "peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium",
            "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium",
            error && "peer-focus:text-destructive peer-[:not(:placeholder-shown)]:text-destructive",
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);
FloatingLabelTextarea.displayName = "FloatingLabelTextarea";

export { FloatingLabelInput, FloatingLabelTextarea };
