import { Info } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="About Section"
      className=" max-w-screen-xl mx-auto space-y-8 my-auto p-8"
    >
      <div className=" bg-amber-100 grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
        <div className="h-full flex flex-col gap-4 items-start">
          <h1 className="text-3xl font-bold">
            Exceptional Coffee Beans from the Heart of Indonesia
          </h1>
          <p className="text-xl text-justify">
            Aroma Sriwijaya works directly with local farmers across Indonesia
            to source the finest Arabica and Robusta coffee beans. Our
            commitment to quality and sustainability ensures that every bean we
            export meets the highest standards.
          </p>
          <button className="btn bg-amber-800 text-white border-none">
            See Our Products
          </button>
        </div>
        <div>
          <div className="carousel w-full h-full rounded-lg shadow-lg bg-base-100">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="/about-beans.jpg"
                className="shadow-lg rounded-lg w-full"
              />
              <div className="absolute right-5 top-1/2 flex -translate-y-1/2  ">
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="/about2.jpg" />
              <div className="absolute left-5 top-1/2 flex -translate-y-1/2 ">
                <a href="#slide1" className="btn btn-circle">
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
