import type { LabelHTMLAttributes } from "react"

export function Label({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props}>{children}</label>
}
