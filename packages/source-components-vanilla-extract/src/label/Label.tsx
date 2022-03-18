import type { LabelHTMLAttributes } from "react"

import { labelStyle } from "./Label.css"

export function Label({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={labelStyle} {...props}>
      {children}
    </label>
  )
}
