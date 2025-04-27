import { cn } from "@/lib/utils"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">I'm Kgaugelo Tladi</h1>
        <p className="text-muted-foreground text-sm text-balance">
          I am fluent in classics like HTML, SASS, TypeScript and C#.
        </p>
      </div>
    </form>
  )
}
