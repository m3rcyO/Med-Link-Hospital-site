import Image from "next/image"
import homePic from "./images/homePic.jpg"
import Navbar from "./_components/Navbar/Navbar"
import Stats from "./_components/Stats/Stats"

export default function Home() {
  return (
    <div className="flex relative">
      <div className="bg-customGreen flex-1 flex justify-center items-center flex-col gap-14 py-20">
        <h1 className="font-domaine font-bold text-6xl mx-4">Consult a Doctor Anytime, Anywhere </h1>
        <p className="font-domaine text-[16px] mx-4 leading-7">
          Providing clinical, financial, and emotional support through the most vulnerable and joyful life stages. Proven outcomes, greater independence, and increased quality of life for high-risk individuals.
        </p>
        <div className="flex ">
          <Stats number='24+' label='Years of excellence' />
          <Stats number='24+' label='Years of excellence' />
          <Stats number='24+' label='Years of excellence' />
        </div>
      </div>
      <div className="lg:flex-1 h-[1/2]">
        <Image src={homePic} width={800} height={200} />

      </div>

    </div>
  )
}
