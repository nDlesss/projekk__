export default function HeroSection() {
  return (
    <section
      id="Hero Section"
      className="h-[89.6dvh] flex justify-center items-center bg-[url('/biji-kopi.jpg')]"
    >
      <div className="space-y-2 w-[400px] text-center text-white">
        <h1 className=" text-6xl font-extrabold">AROMA SRIWIJAYA</h1>
        <p>Premium Indonesian Coffee Beans for Global Markets</p>
        <div className="space-x-4">
          <button className="btn btr-primary border-none text-red-800 bg-white hover:bg-amber-800 hover:text-white">
            Daftar sekarang
          </button>
          <button className="btn bg-white text-amber-800 hover:bg-amber-800 hover:text-white border-none">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
