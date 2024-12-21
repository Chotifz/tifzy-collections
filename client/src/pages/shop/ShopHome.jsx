import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import { useEffect, useState } from "react";
import {
  fetchDetailedProducts,
  fetchFilteredProducts,
  setProductDetails,
} from "@/store/shop/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingProductTile from "@/components/shop/ShoppingProductTile";
import { addToCart, fetchCartItems } from "@/store/shop/cartSlice";
import { useToast } from "@/hooks/use-toast";
import ShopBy from "@/components/shop/ShopBy";
import { brandsWithIcon, categoriesWithIcon } from "@/config";
import Banner from "@/components/shop/Banner";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import ProductDetailDialog from "@/components/shop/ProductDetailDialog";

const slides = [bannerOne, bannerTwo, bannerThree];

const ShopHome = () => {
  const { user } = useSelector((state) => state.auth);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [openDetailDialog, setOpenDetailDialog] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleAddToCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  function handleGetProductDetail(getCurrentProductId) {
    dispatch(fetchDetailedProducts(getCurrentProductId));
  }

  function handleNavigateToShopPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop`);
  }

  function handleDiaolgClose() {
    setOpenDetailDialog(false);
    dispatch(setProductDetails());
  }
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

  useEffect(() => {
    if (productDetails !== null) setOpenDetailDialog(true);
  }, [productDetails]);

  return (
    <div className="flex flex-col min-h-screen">
      <Banner
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <ShopBy
        shopByItems={categoriesWithIcon}
        title={"Shop by Category"}
        className={"lg:grid-cols-5"}
        section={"category"}
        navigateToListingPage={handleNavigateToShopPage}
      />
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    product={productItem}
                    key={productItem._id}
                    handleGetProductDetail={handleGetProductDetail}
                    handleAddToCart={handleAddToCart}
                  />
                ))
              : null}
          </div>
          <ProductDetailDialog
            open={openDetailDialog}
            setOpen={handleDiaolgClose}
            productDetails={productDetails}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </section>
      <ShopBy
        shopByItems={brandsWithIcon}
        title={"Shop by Brand"}
        className={"lg:grid-cols-6"}
        section={"brand"}
        navigateToListingPage={handleNavigateToShopPage}
      />
    </div>
  );
};

export default ShopHome;
