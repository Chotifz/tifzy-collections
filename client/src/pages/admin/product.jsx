import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Fragment, useState } from "react";

const AdminProducts = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  return (
    <Fragment>
      <div className="w-full mb-5 flex justify-end">
        <Button onClick={() => setOpenCreateProduct(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 "></div>
      <Sheet open={openCreateProduct} onOpenChange={setOpenCreateProduct}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default AdminProducts;
