import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import {
  BabyIcon,
  ChevronLeft,
  ChevronRight,
  CloudLightningIcon,
  ShirtIcon,
  UmbrellaIcon,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { fetchFilteredProducts } from "@/store/shop/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingProductTile from "@/components/shop/ShoppingProductTile";

const slides = [bannerOne, bannerTwo, bannerThree];
const categories = [
  { id: "man", label: "Man", icon: ShirtIcon },
  { id: "woman", label: "Woman", icon: CloudLightningIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

const ShopHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList } = useSelector((state) => state.shopProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    dispatch(
      fetchFilteredProducts({ filterParams: {}, sortParams: "price-lowtohigh" })
    );
  }, [dispatch]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700`}
          />
        ))}
        <Button
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            )
          }
          variant="outline "
          size="icons"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeft className="w-5 h-5 m-1.5" />
        </Button>
        <Button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          variant="outline "
          size="icons"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRight className="w-5 h-5 m-1.5" />
        </Button>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-col2 md:grid-col-3 lg:grid-cols-5 gap-4">
            {categories.map((item, index) => (
              <Card
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
      <section className="py-12 ">
        {" "}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile product={productItem} />
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopHome;
