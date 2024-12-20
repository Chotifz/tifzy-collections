import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import {
  handleCartItemDelete,
  handleUpdateQuantity,
} from "@/store/shop/cartActions";

function CartItemsContent({ cartItem }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const updateItem = (typeOfAction) => {
    handleUpdateQuantity(dispatch, user, cartItem, typeOfAction);
  };

  const deleteItem = () => {
    handleCartItemDelete(dispatch, user, cartItem, toast);
  };

  return (
    <div className="flex items-center space-x-4">
      <img
        src={cartItem?.image}
        alt={cartItem.title}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-bold">{cartItem?.title}</h3>
        <div className="flex items-center mt-1 gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 "
            onClick={() => updateItem("minus")}
            disabled={cartItem.quantity === 1}
          >
            <Minus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span className="font-semibold">{cartItem.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateItem("plus")}
            disabled={cartItem.quantity == 15}
          >
            <Plus className="w-4 h-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          $
          {cartItem?.salePrice > 0
            ? (cartItem?.salePrice * cartItem?.quantity).toFixed(2)
            : (cartItem?.price * cartItem?.quantity).toFixed(2)}
        </p>
        <Trash2 onClick={deleteItem} className="cursor-pointer mt-1 h-5 w-5" />
      </div>
    </div>
  );
}

export default CartItemsContent;
