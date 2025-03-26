import RProvider from "@/redux-toolkit-async/RProvider";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      {/* for using of context api */}
      {/* <CartButton />
      <ProductList />
      <Cart /> */}

      {/* for using of redux toolkit */}
      <RProvider />
    </main>
  );
}
