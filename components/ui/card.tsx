// components/ui/card.tsx
export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`border rounded-lg shadow-md ${className}`}>{children}</div>
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={className}>{children}</div>
}

export function CardTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h2 className={`font-bold ${className}`}>{children}</h2>
}

export function CardDescription({ children, className }: { children: React.ReactNode, className?: string }) {
  return <p className={`text-gray-500 ${className}`}>{children}</p>
}