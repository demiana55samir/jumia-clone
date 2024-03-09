import Header from "@/components/header/header";
import Electronics from "@/components/recommended/electronics";
import SliderMainPage from "@/components/mainPage/slider";
import Recommended from "@/components/recommended/recommended";
// import Recommendedforu from "@/components/recommended/recommendedforu";
import Jewelry from "@/components/recommended/jewelry";
import WomenClothing from "@/components/recommended/women";
import MenClothing from "@/components/recommended/mens";

export default function Home() {
  return (
   <main className="md:max-w-7xl mx-auto p-2">
    <Header/>
    <Recommended/>
    <SliderMainPage/>
    {/* <Recommendedforu/> */}
    <Electronics/>
    <Jewelry/>
    <WomenClothing/>
    <MenClothing/>
   </main>
  );
}
