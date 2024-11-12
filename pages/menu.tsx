import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Tipe data untuk item menu
type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

// Data contoh untuk menu
const foodItems: MenuItem[] = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan telur, ayam, dan sayuran",
    price: 25000,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Mie Ayam",
    description: "Mie ayam dengan potongan ayam dan sayuran segar",
    price: 20000,
    image: "/placeholder.svg?height=100&width=100"
  },
  // Tambahkan item makanan lainnya di sini
]

const drinkItems: MenuItem[] = [
  {
    id: 101,
    name: "Es Teh Manis",
    description: "Teh manis dingin yang menyegarkan",
    price: 5000,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 102,
    name: "Jus Alpukat",
    description: "Jus alpukat segar dengan susu",
    price: 15000,
    image: "/placeholder.svg?height=100&width=100"
  },
  // Tambahkan item minuman lainnya di sini
]

// Komponen untuk menampilkan item menu
const MenuItemCard = ({ item }: { item: MenuItem }) => (
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

// Komponen utama Menu
export default function Menu() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Menu Restoran Kami</h1>
      <Tabs defaultValue="food" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="food">Makanan</TabsTrigger>
          <TabsTrigger value="drinks">Minuman</TabsTrigger>
        </TabsList>
        <TabsContent value="food">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foodItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="drinks">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {drinkItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}