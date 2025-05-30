import { Info } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="About Section"
      className=" max-w-screen-xl mx-auto space-y-8 my-auto p-8"
    >
      <div className=" bg-red-200  grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
        <div className="h-full flex flex-col gap-4 items-start">
          <h1 className="text-3xl font-bold">
            "Tempat terbaik untuk berkumpul, bercanda, dan menikmati makanan
            lezat."
          </h1>
          <p className="text-xl text-justify">
            "Selamat datang di tempat di mana setiap hidangan adalah karya seni,
            dan setiap momen menjadi kenangan yang tak terlupakan. Kami
            menyajikan lebih dari sekadar makanan—kami menghadirkan pengalaman
            kuliner yang elegan, memadukan bahan-bahan premium dengan sentuhan
            rasa yang berkelas. Rasakan kehangatan layanan dan kenikmatan setiap
            rasa hanya di tempat terbaik pilihan Anda."
          </p>
          <button className="btn bg-red-800 text-white border-none">
            <a
              href="
            #Product"
            >
              See Our Products
            </a>
          </button>
        </div>
        <div>
          <div className="carousel w-full h-full rounded-lg shadow-lg bg-base-100">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="/ikan1.jpg"
                className="shadow-lg rounded-lg w-[600px] h-[400px] object-cover mx-auto"
              />
              <div className="absolute right-5 top-1/2 flex -translate-y-1/2  ">
                <a href="#slide2" className="btn bg-red-500 text-white btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="/ayam1.jpg" />
              <div className="absolute left-5 top-1/2 flex -translate-y-1/2 ">
                <a href="#slide1" className="btn bg-red-500 text-white btn-circle">
                  ❮
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
