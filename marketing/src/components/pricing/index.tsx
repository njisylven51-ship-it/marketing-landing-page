import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Pricing = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, []);
  const loading = products.length === 0

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(prev => !prev);
  //   },3000000)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // })

  

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-[#9be8ff] px-6 py-20">

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-[0_0_10px_#00ffff50]">
        ELECTRONICS PRICING
        
      </h1>
        <p className="flex justify-center items-center p-20">
          {loading && <Spinner />}
        </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#0b1026] rounded-2xl p-5 shadow-[0_0_20px_#00ffff30] border border-cyan-400/20 hover:shadow-[0_0_30px_#00f0ff80] transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-contain mb-4 rounded-lg bg-black/20 p-4 shadow-[0_0_12px_#00eaff40]"
            />

            <div className="text-xl font-bold text-white mb-2">
              {product.title}
            </div>

            <p className="text-cyan-200 text-sm mb-4 line-clamp-4">
              {product.description}
            </p>

            <div className="flex items-center justify-between mt-4">
              <p className="text-cyan-400 text-lg font-semibold">
                ${product.price}
              </p>

              <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-md font-semibold shadow-[0_0_10px_#00eaff80] transition">
                Buy now
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Pricing;
