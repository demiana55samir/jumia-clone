import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Shoppingcart() {
  return (
    <Link href="/cart">
      <span>
        <ShoppingCartIcon className="h-12" /> Cart
        <span className=" badge badge-warning text-white mr-5 ml-2" style={{zIndex:100}}>0</span>
      </span>
    </Link>
  );
}
