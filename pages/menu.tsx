// pages/menu.tsx
import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const foodItems = [
  { id: 1, name: "Nasi Goreng", description: "Nasi dengan bumbu spesial", price: 25000, image: "/img/nasi-goreng.jpg" },
  { id: 2, name: "Mie Ayam", description: "Mie dengan topping ayam", price: 20000, image: "/img/mie-ayam.jpg" },
]

const drinkItems = [
  { id: 101, name: "Es Teh", description: "Teh manis dingin", price: 5000, image: "/img/es-teh.jpg" },
  { id: 102, name: "Jus Alpukat", description: "Jus alpukat segar", price: 15000, image: "/img/jus-alpukat.jpg" },
]

const MenuItemCard = ({ item }: { item: any }) => (
  <Card className="overflow-hidden">
    <CardContent className="p-0">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
        <CardDescription className="text-sm mb-2">{item.description}</CardDescription>
        <p className="font-bold text-primary">Rp {item.price.toLocaleString()}</p>
      </div>
    </CardContent>
  </Card>
)

export default function Menu() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Menu Restoran Kami</h1>
      <Tabs defaultValue="food" className="w-full">
        {(activeTab: string, setActiveTab: Function) => (
          <>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="food" onClick={setActiveTab}>Makanan</TabsTrigger>
              <TabsTrigger value="drinks" onClick={setActiveTab}>Minuman</TabsTrigger>
            </TabsList>
            <TabsContent value="food" activeTab={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foodItems.map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="drinks" activeTab={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {drinkItems.map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  )
}
