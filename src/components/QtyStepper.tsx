"use client";

import { MAX_QTY } from "@/lib/order";

interface Props { value: number; onChange: (n: number) => void; label: string; min?: number; size?: "sm" | "md" }

export default function QtyStepper({ value, onChange, label, min = 1, size = "md" }: Props) {
  return (
    <div className={`qty qty--${size}`} role="group" aria-label={label}>
      <button type="button" className="qty__btn" aria-label={`Decrease quantity of ${label}`} disabled={value <= min} onClick={() => onChange(value - 1)}>−</button>
      <input
        className="qty__input"
        type="number"
        inputMode="numeric"
        min={min}
        max={MAX_QTY}
        value={value}
        aria-label={`Quantity of ${label}`}
        onChange={(e) => { const n = parseInt(e.target.value, 10); if (!Number.isNaN(n)) onChange(Math.min(Math.max(n, min), MAX_QTY)); }}
      />
      <button type="button" className="qty__btn" aria-label={`Increase quantity of ${label}`} disabled={value >= MAX_QTY} onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}
