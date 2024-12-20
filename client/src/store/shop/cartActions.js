import { deleteCartItem, updateCartQuantity } from "./cartSlice";

export const handleUpdateQuantity = (
  dispatch,
  user,
  getCartItem,
  typeOfAction
) => {
  dispatch(
    updateCartQuantity({
      userId: user?.id,
      productId: getCartItem?.productId,
      quantity:
        typeOfAction === "plus"
          ? getCartItem?.quantity + 1
          : typeOfAction === "minus"
          ? getCartItem?.quantity - 1
          : getCartItem?.quantity,
    })
  );
};

export const handleCartItemDelete = (dispatch, user, cartItem, toast) => {
  dispatch(
    deleteCartItem({ userId: user?.id, productId: cartItem?.productId })
  ).then((data) => {
    if (data?.payload?.success) {
      toast({
        title: "Cart item is deleted successfully",
      });
    }
  });
};
