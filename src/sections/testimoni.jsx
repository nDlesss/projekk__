import { Coffee } from "lucide-react";
import { Quote } from "lucide-react";
import { Leaf } from "lucide-react";
import { Globe } from "lucide-react";
import { Award } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section
      id="Benefit Section"
      className="max-w-screen-xl mx-auto space-y-8 my-20"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg">
          Testimonials
        </div>
        <div className="flex items-center gap-2">
          <Award className="text-red-800" />
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        </div>
        <p className="text-base text-gray-600">
          Dengar Testimoni dari pelanggan kami.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Quote className="text-red-800 h-8 w-8" />
            <p>
              “Setiap suapan penuh rasa! Bumbunya meresap, porsinya pas, dan
              semuanya dimasak dengan cinta. Pasti balik lagi!”
            </p>
            <span className="text-end font-bold">- Munji</span>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Quote className="text-red-800 h-8 w-8" />
            <p>
              “Pertama kali ke sini atas rekomendasi teman, dan ternyata
              benar-benar memuaskan! Saya langsung jatuh cinta sama tempat ini.
              Rasanya susah cari tempat makan yang punya standar setinggi ini
              tapi tetap terasa hangat dan bersahabat.”
            </p>
            <span className="text-end font-bold">- Alya</span>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Quote className="text-red-800 h-8 w-8" />
            <p>
              “Kami sudah beberapa kali mengadakan pertemuan komunitas di
              restoran ini, dan selalu puas. Tidak hanya makanannya yang enak
              dan beragam, tapi juga suasana tempatnya yang hangat dan mendukung
              interaksi. ”
            </p>
            <span className="text-end font-bold">- Ajrin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
