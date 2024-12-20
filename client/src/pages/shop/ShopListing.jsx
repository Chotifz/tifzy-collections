import ProductDetailDialog from "@/components/shop/ProductDetailDialog";
import ProductFilter from "@/components/shop/ProductFilter";
import ShoppingProductTile from "@/components/shop/ShoppingProductTile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sortOptions } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { addToCart, fetchCartItems } from "@/store/shop/cartSlice";
import {
  fetchDetailedProducts,
  fetchFilteredProducts,
  setProductDetails,
} from "@/store/shop/productsSlice";
import { ArrowUpDownIcon } from "lucide-react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];
  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");

      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }
  return queryParams.join("&");
}

function ShopListing() {
  const dispatch = useDispatch();
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { user } = useSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState(null);
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
  const { toast } = useToast();

  const handleSort = (value) => {
    setSort(value);
  };

  const handleFilter = (getSectionId, getCurrentOption) => {
    let copyFilter = { ...filter };
    const indexOfCurrentSection = Object.keys(copyFilter).indexOf(getSectionId);

    if (indexOfCurrentSection === -1) {
      copyFilter = {
        ...copyFilter,
        [getSectionId]: [getCurrentOption],
      };
    } else {
      const indexOfCurrentSection =
        copyFilter[getSectionId].indexOf(getCurrentOption);

      if (indexOfCurrentSection === -1) {
        copyFilter[getSectionId].push(getCurrentOption);
      } else copyFilter[getSectionId].splice(indexOfCurrentSection, 1);
    }
    setFilter(copyFilter);
    sessionStorage.setItem("filter", JSON.stringify(copyFilter));
  };

  function handleGetProductDetail(getCurrentProductId) {
    dispatch(fetchDetailedProducts(getCurrentProductId));
  }

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

  function handleDiaolgClose() {
    setOpenDetailDialog(false);
    dispatch(setProductDetails());
  }
  useEffect(() => {
    setSort("price-lowtohigh");
    setFilter(JSON.parse(sessionStorage.getItem("filter")) || {});
  }, []);

  useEffect(() => {
    if (filter && Object.keys(filter).length > 0) {
      const createQueryString = createSearchParamsHelper(filter);
      setSearchParams(new URLSearchParams(createQueryString));
    }
  }, [filter]);

  useEffect(() => {
    if (filter !== null && sort !== null)
      dispatch(
        fetchFilteredProducts({ filterParams: filter, sortParams: sort })
      );
  }, [dispatch, sort, filter]);

  useEffect(() => {
    if (productDetails !== null) setOpenDetailDialog(true);
  }, [productDetails]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter filter={filter} handleFilter={handleFilter} />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-bold">All Products</h2>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              {productList.length} Products
            </span>{" "}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex items-center gap-1"
                  variant="outline"
                  size="sm"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      key={sortItem.id}
                      value={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {productList && productList.length > 0
            ? productList.map((productItem) => (
                <ShoppingProductTile
                  key={productItem._id}
                  product={productItem}
                  handleGetProductDetail={handleGetProductDetail}
                  handleAddToCart={handleAddToCart}
                />
              ))
            : null}
        </div>
      </div>
      <ProductDetailDialog
        open={openDetailDialog}
        setOpen={handleDiaolgClose}
        productDetails={productDetails}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default ShopListing;
