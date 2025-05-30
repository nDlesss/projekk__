export default function HeroSection() {
  return (
    <section
      id="Hero Section"
      className="h-[100dvh] flex justify-center items-center bg-[url('/hero.jpg')]"
    >
      <div className="space-y-2 w-[400px] text-center text-white">
        <h1 className=" text-6xl font-black text-red-500">CITA RESTO</h1>
        <p className="text-xl ">Restoran Khas Masakan Nusantara</p>
        <div className="space-x-4">
          <button className="btn btr-primary border-none text-red-800 bg-white hover:bg-red-400 hover:text-white">
            <a href="#contact">Daftar sekarang</a>
          </button>
          <button className="btn bg-white text-amber-800 hover:bg-red-400 hover:text-white border-none">
            <a href="#About Section">Learn More</a>
          </button>
        </div>
      </div>
    </section>
  );
}
