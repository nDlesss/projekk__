import { Beef, Coffee } from "lucide-react";
import { Leaf } from "lucide-react";
import { Globe } from "lucide-react";
import { Award } from "lucide-react";

export default function CommitmentSection() {
  return (
    <section
      id="Benefit Section"
      className="max-w-screen-xl mx-auto p-10 space-y-8 my-20"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="bg-red-100 text-amber-800 px-2 py-1 rounded-lg">
          Why Choose Us?
        </div>
        <div className="flex items-center gap-2">
          <Award className="text-red-800" />
          <h2 className="text-3xl font-bold">Our Commitment to Excellence</h2>
        </div>
        <p className="text-base text-gray-600">
          "Kami berkomitmen hanya menyajikan yang terbaik. Setiap bahan kami
          pilih dengan cermat, setiap masakan kami olah dengan sepenuh hati.
          Karena untuk kami, kepuasan Anda adalah prioritas yang tak bisa
          ditawar."
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-border bg-base-100 ">
          <div className="card-body">
            <Globe className="text-red-800 h-8 w-8" />
            <h2 className="card-title font-bold">Impresive Quality</h2>
            <p>
              "Masih bingung mau makan di mana? Di sini jawabannya! Kami tidak
              hanya menyajikan makanan lezat, tapi juga pengalaman yang bikin
              kamu ingin kembali lagi. Coba sekali, pasti ketagihan!"
            </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body">
            <Beef className="text-red-800 h-8 w-8" />
            <h2 className="card-title font-bold">Every Food Taste Spesial</h2>
            <p>
              "Tempat kece, makanan enak, spot foto keren – semua ada di sini!
              Cocok banget buat hangout sambil menikmati sajian unik yang nggak
              cuma enak, tapi juga estetik."
            </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body">
            <Leaf className="text-red-800 h-8 w-8" />
            <h2 className="card-title font-bold">Suport Our Community</h2>
            <p>
              "Kami bukan hanya tempat makan. Kami adalah bagian dari komunitas
              ini—tumbuh bersama, melayani dengan hati, dan menciptakan ruang di
              mana setiap orang merasa seperti di rumah sendiri."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
