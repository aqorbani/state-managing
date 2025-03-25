import Cart from "@/context/components/Cart";
import CartButton from "@/context/components/CartButton";
import ProductList from "@/context/components/ProductList";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <CartButton />
      <ProductList />
      <Cart />
    </main>
  );
}
