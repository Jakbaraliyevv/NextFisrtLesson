import Image from "next/image";
import React from "react";

function Showcase() {
  return (
    <section className="w-[90%] m-auto">
      <div className="relative">
        <Image
          className="rounded-2xl"
          src="/show.png"
          alt="Tavsif matni"
          width={500}
          height={500}
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />

        <div className="absolute bottom-[20px] p-[60px]">
          <h1 className="text-center pb-4 text-[22px] font-mono font-bold">Browse The Range</h1>
          <p className="text-center text-[19px] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ullam
            perferendis unde corrupti sequi labore ab veniam natus doloribus
            dignissimos quam necessitatibus, libero voluptas facilis non
            tempora, mollitia quibusdam explicabo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
