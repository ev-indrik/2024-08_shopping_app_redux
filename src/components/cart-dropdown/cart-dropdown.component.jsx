import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button buttonType={""}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
