import ProductCard from "./components/Card/ProductCard";
import Navbar from "./components/Header/Navbar";
import Board from "./components/HomeBoard/Board";
import Stripe from "./components/Stripe/Stripe";
// import Board from "./components/HomeBoard/Board";
import img1 from "./assets/egg1.png";
import img2 from "./assets/egg12.png";
import img5 from "./assets/egg15.png";
import img4 from "./assets/egg30.png";
import img3 from "./assets/egg6.png";
import img6 from "./assets/liquid white.png";
import img7 from "./assets/liquid yolk.png";
import img8 from "./assets/momo6.png";
import img9 from "./assets/powder.png";
import ban1 from "./assets/banner1.png";
import ban2 from "./assets/in.jpg";
import ban3 from "./assets/in1.jpg";

function App() {
  const products = [
    {
      id: 1,
      name: "Desi Eggs - 10 pcs",
      image: img1,
      rating: 4.2,
      reviews: 78,
      originalPrice: 100,
      discountPercent: 10,
    },
    {
      id: 2,
      name: "Boiler Eggs - 12 Pcs",
      image: img2,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 3,
      name: "Desi Eggs - 6 pcs",
      image: img3,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 4,
      name: "Desi Eggs - 30 pcs",
      image: img4,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 5,
      name: "Desi Eggs - 15 pcs",
      image: img5,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 6,
      name: "Liquid Egg White - 1KG",
      image: img6,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 7,
      name: "Liquid Egg Yolk - 1KG",
      image: img7,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 8,
      name: "Egg Momos - 6 Pcs",
      image: img8,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 9,
      name: "Egg Yolk Power - 1KG",
      image: img9,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 10,
      name: "R Eggs - 6 pcs",
      image: img3,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
  ];

  const product = [
    
    {
      id: 6,
      name: "Liquid Egg White - 1KG",
      image: img6,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 7,
      name: "Liquid Egg Yolk - 1KG",
      image: img7,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 8,
      name: "Egg Momos - 6 Pcs",
      image: img8,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 9,
      name: "Egg Yolk Power - 1KG",
      image: img9,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    },
    {
      id: 8,
      name: "Egg Momos - 6 Pcs",
      image: img8,
      rating: 3.5,
      reviews: 42,
      originalPrice: 180,
      discountPercent: 15,
    }  ];

  return (
    <div className="bg-zinc-100 ">
      <Navbar className="" />
      {/* <Typeo /> */}
      <Board img = {ban1} className=""/>
      <Stripe data="!! Our Best Products !!" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 py-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Board img = {ban2}/>
      <br/>
      <Stripe data="!! Ready To Eat !!" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 py-4">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
