import { ChefHat } from "lucide-react";

export default function ProductsSection() {
  return (
    <section
      id="Product"
      className="p-10 max-w-screen-xl mx-auto space-y-8 my-28"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="bg-amber-100 text-red-500 px-2 py-1 rounded-lg">
          Our Products
        </div>
        <div className="flex items-center gap-2">
          <ChefHat className="text-red-800" />
          <h2 className="text-3xl font-bold">Featured Our Menu Selections</h2>
        </div>
        <p className="text-base text-gray-600">
          Explore our premium coffee varieties from different regions of
          Indonesia.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-sm transform hover:scale-104 transition-transform duration-300">
          <div>
            <img
              src="/nasgor.jpg"
              alt="Shoes "
              className="relative shadow-2xl rounded-2xl w-full h-[255px]"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title">Nasgor Spesial</h2>
            <h2 className="card-title text-red-800 text-sm">
              Aceh, North Sumatra
            </h2>
            <p>
              Bold, earthy, and full-bodied with notes of dark chocolate, cedar,
              and a subtle spice finish.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-800  hover:bg-white hover:text-red-800 text-white mt-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm transform hover:scale-104 transition-transform duration-300">
          <figure>
            <img
              src="/ayam3.jpg"
              alt="Shoes"
              className="relative shadow-2xl rounded-2xl w-full h-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ayam Spesial</h2>
            <h2 className="card-title text-red-800 text-sm">South Sulawesi</h2>
            <p>
              Complex and well-balanced with notes of dark chocolate, spices,
              and a clean, syrupy body.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-800  hover:bg-white hover:text-red-800 text-white mt-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm transform hover:scale-104 transition-transform duration-300">
          <figure>
            <img
              src="/ayam2.jpg"
              alt="Shoes"
              className="h-[255px] relative shadow-2xl rounded-2xl w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ayam Opor</h2>
            <h2 className="card-title text-red-800 text-sm">East Java</h2>
            <p>
              Strong and bold with woody notes, a hint of dark chocolate, and a
              smooth, lingering finish.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-800 hover:bg-white hover:text-red-800 text-white mt-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
