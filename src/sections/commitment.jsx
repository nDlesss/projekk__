import { Coffee } from "lucide-react";
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
        <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg">
          Why Choose Us?
        </div>
        <div className="flex items-center gap-2">
          <Award className="text-amber-800" />
          <h2 className="text-3xl font-bold">Our Commitment to Excellence</h2>
        </div>
        <p className="text-base text-gray-600">
          Discover why coffee businesses around the world trust Aroma Sriwijaya
          for their premium Indonesian coffee needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-border bg-base-100 ">
          <div className="card-body">
            <Globe className="text-amber-800 h-8 w-8" />
            <h2 className="card-title font-bold">Impresive Quality</h2>
            <p>
              "Our coffee is more than just a drink — it’s a crafted experience.
              We use only premium beans sourced from the best farmers in
              Indonesia, roasted with precision to bring out the richest, most
              authentic flavors."
            </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body">
            <Coffee className="text-amber-800 h-8 w-8" />
            <h2 className="card-title font-bold">Every Cup Taste Spesial</h2>
            <p>
              "Every cup of our coffee tells a story — a unique taste you won’t
              find anywhere else. Our blend is crafted to stand out, perfect for
              those who crave something truly special."
            </p>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body">
            <Leaf className="text-amber-800 h-8 w-8" />
            <h2 className="card-title font-bold">Suport Our Community</h2>
            <p>
              "By choosing our coffee, you're not just enjoying great flavor —
              you're also supporting local farmers and sustainable agriculture.
              We believe great coffee should do good."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
