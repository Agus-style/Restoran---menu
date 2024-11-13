// components/ui/card.tsx
import React from "react"

export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`card ${className}`}>{children}</div>
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`card-content ${className}`}>{children}</div>
}

export function CardDescription({ children, className }: { children: React.ReactNode, className?: string }) {
  return <p className={`card-description ${className}`}>{children}</p>
}

export function CardHeader({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`card-header ${className}`}>{children}</div>
}

export function CardTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h3 className={`card-title ${className}`}>{children}</h3>
}
