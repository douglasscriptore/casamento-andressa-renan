"use client";
import { Image } from "@mantine/core";

export default function Madrinhas() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-10 lg:gap-0 py-10 px-8 lg:px-24 items-center">
      <div className="w-full md:w-2/5 flex flex-col text-center gap-6 sm:mb-4">
        <h1
          className="text-gray-500 font-bold text-4xl"
          style={{ fontFamily: "brittany" }}
        >
          Madrinhas
        </h1>
        <p>
          <span className="text-gray-500">
            Escolhemos tons de <span className="font-bold">TERRACOTA</span> para
            compor a paleta das nossas madrinhas. Queremos que você use o vestido
            que mais lhe agrade, afinal, o conforto é fundamental! Por isso,
            fique à vontade para escolher um modelo em que você se sinta bem.
          </span>
          <div className="flex gap-2 items-center justify-center mt-2">
            <div
              style={{ backgroundColor: "#A42202", width: "80px", height: "80px", borderRadius: "100%" }}
            />
            <div
              style={{ backgroundColor: "#C8640B", width: "80px", height: "80px", borderRadius: "100%" }}
            />
            <div
              style={{ backgroundColor: "#D26F24", width: "80px", height: "80px", borderRadius: "100%" }}
            />
          </div>
        </p>
      </div>
      <div className="flex flex-col text-center gap-6">
        <Image
          mx="auto"
          radius="md"
          width={450}
          height={300}
          src="/assets/madrinhas-img.png"
        ></Image>
      </div>
    </div>
  );
}
