import { Card, CardContent } from "../ui/card";

export default function ShopBy({
  shopByItems,
  title,
  className,
  navigateToListingPage,
  section,
}) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className={`grid grid-cols-2 md:grid-cols-3 ${className} gap-4`}>
          {shopByItems.map((item, index) => (
            <Card
              onClick={() => navigateToListingPage(item, section)}
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <item.icon className="w-12 h-12 mb-4 text-primary" />
                <span>{item.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
