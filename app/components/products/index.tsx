"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://678e8595a64c82aeb120a0f7.mockapi.io/telegra1")
      .then((response: any) => setData(response.data));
  }, []);

  console.log(data);

  return (
    <section className="w-[90%] m-auto ">
      <div className="text-center text-[25px] font-mono font-bold py-9">
        <h1>Our Products</h1>
      </div>

      <div className="grid grid-cols-4 gap-[40px]">
        {data.map((value: any) => (
          <div
            key={value.id}
            className="w-[300px] h-[450px] bg-[rgb(244,245,247)] rounded-md"
          >
            <Image
              className="rounded-md"
              src={value.image}
              alt="Tavsif matni"
              width={300}
              height={300}
            />
            <div className="p-4 flex flex-col gap-3">
              <h2>{value.description}</h2>
              <p>{value.name}</p>
              <div className="flex items-center justify-between">
                <h3>{value.price}</h3>
                <s>{value.oldPrice}</s>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;

//
