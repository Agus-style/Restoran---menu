//components/ui/tabs.tsx
import { useState } from "react"

export function Tabs({ children, defaultValue }: { children: React.ReactNode, defaultValue: string }) {
  const [selected, setSelected] = useState(defaultValue)
  return (
    <div>
      {React.Children.map(children, child => 
        React.cloneElement(child as React.ReactElement, { selected, setSelected })
      )}
    </div>
  )
}

export function TabsList({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={className}>{children}</div>
}

export function TabsTrigger({ children, value, selected, setSelected }: any) {
  return (
    <button
      onClick={() => setSelected(value)}
      className={`${selected === value ? "text-blue-600" : "text-gray-600"} p-2`}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, selected }: { children: React.ReactNode, value: string, selected: string }) {
  return selected === value ? <div>{children}</div> : null
}