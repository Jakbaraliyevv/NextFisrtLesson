import Image from "next/image";
import React from "react";

function Products() {


    
  return (
    <section className="w-[90%] m-auto ">
      <div className="text-center text-[25px] font-mono font-bold py-9">
        <h1>Our Products</h1>
      </div>

      <div>
        <div className="w-[300px] h-[450px] bg-[rgb(244,245,247)] rounded-md">
          <Image
            className="rounded-md"
            src="/img1.png"
            alt="Tavsif matni"
            width={300}
            height={300}
          />
          <div className="p-4 flex flex-col gap-3">
            <h2>Syltherine</h2>
            <p>Stylish cafe chair</p>
            <div className="flex items-center justify-between">
              <h3>Rp 2.500.000</h3>
              <s>Rp 3.500.000</s>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

// https://678e8595a64c82aeb120a0f7.mockapi.io/telegra1
