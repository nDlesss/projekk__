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
          <Award className="text-amber-800" />
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        </div>
        <p className="text-base text-gray-600">
          Hear from coffee businesses that have partnered with us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Quote className="text-amber-800 h-8 w-8" />
            <p>
              "Aroma Sriwijaya has been our trusted supplier for Sumatra
              Mandheling for over three years. Their consistent quality and
              reliable shipping have made them an invaluable partner for our
              roastery."
            </p>
            <span className="text-end font-bold">- James Donovan</span>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Quote className="text-amber-800 h-8 w-8" />
            <p>
              "The Toraja beans we source from Aroma Sriwijaya have become a
              customer favorite at our cafes. Their commitment to quality and
              sustainability aligns perfectly with our brand values."
            </p>
            <span className="text-end font-bold">- Sophie Laurent</span>
          </div>
        </div>
        <div className="card card-border bg-base-100 ">
          <div className="card-body space-y-4">
            <Quote className="text-amber-800 h-8 w-8" />
            <p>
              "Aroma Sriwijaya has been our trusted supplier for Sumatra
              Mandheling for over three years. Their consistent quality and
              reliable shipping have made them an invaluable partner for our
              roastery."
            </p>
            <span className="text-end font-bold">- Marcus Kim</span>
          </div>
        </div>
      </div>
    </section>
  );
}
