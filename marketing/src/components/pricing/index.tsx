import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch("https://product-open-data.com/api/products");
        const data = await response.json();
        console.log(data);
        console.log("it actually worked");
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, []); // <- Make sure the empty array is inside the parentheses

  return (
    <div>
      {/* You can display your products here later */}
    </div>
  );
};

export default Pricing;
