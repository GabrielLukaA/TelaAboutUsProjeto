import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <body>
      <header className="w-full px-8 h-[100px] flex justify-between items-center shadow-oi">
        <img src="/Icon.svg" alt="" />
        <div className="flex w-[180px] items-center justify-between ">
          <img width={"26px"} height={"30px"} src="/Language.svg" alt="" />
          <img width={"18px"} height={"18px"} src="/Theme.svg" alt="" />
          <img width={"40px"} height={"46px"} src="/Profile.svg" alt="" />
        </div>
      </header>

      <main className="w-full justify-center flex h-[642px] items-center">
        <img
          src="/Rectangle 450.svg"
          alt=""
          className="ball po:right-[260px]"
        />
        <div className="w-1/2 pl-[144px]  pt-[116px] flex justify-center gap-16 flex-col">
          <h1 className="alata-use">Headline Here</h1>
          <p className="alata-use-paragraph max-w-[480px]">
            Lorem ipsum dolor sit amet consectetur. Quis purus ullamcorper
            facilisis molestie dignissim viverra elementum nunc eros. Fermentum
            neque justo ut elementum. Sit erat vulputate ac aliquet enim cras.
            Diam aliquam massa aliquam arcu suspendisse lorem odio velit
            suscipit. Velit nec habitant enim blandit nec vitae at convallis
            sed. Augue commodo etiam ultrices urna at urna.{" "}
          </p>
          <button className="w-[189px] py-2 px-12 bg-pink-500 rounded-lg text-[#FCFCFC] font-bold">
            Confirmar
          </button>
        </div>
        <div className="w-1/2 h-max flex gap-6 pt-[96px]">
          <img
            width={"270px"}
            height={"450px"}
            src="/img-left.svg"
            alt=""
            className=""
          />
          <img
            width={"270px"}
            height={"450px"}
            src="/img-right.svg"
            alt=""
            className=""
          />
        </div>
      </main>
    </body>
  );
}
