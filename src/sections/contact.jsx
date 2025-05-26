import {
  Facebook,
  Info,
  Instagram,
  Mail,
  TicketCheckIcon,
  Youtube,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="About Section" className="max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-2 md:grid-cols-4 p-20 bg-amber-100 gap-30 items-center justify-items-center text-amber-600">
        <div className="flex flex-col gap-2 items-center">
          <Instagram className=" w-12 h-12 " />
          <span className="text-gray-400">INSTAGRAM</span>
          <a
            href="https://www.instagram.com/aromasriwijaya__/"
            className="font-bold"
          >
            @aromasriwijaya__
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Facebook className=" w-12 h-12 " />
          <span className="text-gray-400">FACEBOOK</span>
          <a href="https://facebook.com" className="font-bold">
            AromaSriwijaya_
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Mail className=" w-12 h-12 " />
          <span className="text-gray-400">EMAIL </span>
          <a href="https://mail.google.com/mail/u/0/ " className="font-bold">
            AromaS@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Youtube className=" w-12 h-12 " />
          <span className="text-gray-400">YOUTUBE </span>
          <a href="https://youtube.com" className="font-bold">
            AromaYT
          </a>
        </div>
      </div>
    </section>
  );
}
