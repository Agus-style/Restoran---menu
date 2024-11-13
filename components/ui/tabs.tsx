// components/ui/tabs.tsx
import React, { useState } from "react"

export function Tabs({ children, defaultValue, className }: any) {
  const [activeTab, setActiveTab] = useState(defaultValue)
  return <div className={`tabs ${className}`}>{children(activeTab, setActiveTab)}</div>
}

export function TabsList({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`tabs-list ${className}`}>{children}</div>
}

export function TabsTrigger({ children, value, onClick, className }: any) {
  return (
    <button onClick={() => onClick(value)} className={`tabs-trigger ${className}`}>
      {children}
    </button>
  )
}

export function TabsContent({ children, value, activeTab, className }: any) {
  return activeTab === value ? <div className={`tabs-content ${className}`}>{children}</div> : null
}
