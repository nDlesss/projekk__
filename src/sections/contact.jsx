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
    <section id="contact" className="max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-2 md:grid-cols-4 p-20 bg-red-200 gap-30 items-center justify-items-center text-red-800">
        <div className="flex flex-col gap-2 items-center">
          <Instagram className=" w-12 h-12 text-red-500 " />
          <span className="text-black ">INSTAGRAM</span>
          <a
            href="https://www.instagram.com/aromasriwijaya__/"
            className="font-bold"
          >
            @Citaresto__
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Facebook className=" w-12 h-12  text-red-500" />
          <span className="text-black">FACEBOOK</span>
          <a href="https://facebook.com" className="font-bold">
            CitaResto_
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Mail className=" w-12 h-12 text-red-500 " />
          <span className="text-black">EMAIL </span>
          <a href="https://mail.google.com/mail/u/0/ " className="font-bold">
            CTRestoS@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Youtube className=" w-12 h-12 text-red-500 " />
          <span className="text-black">YOUTUBE </span>
          <a href="https://youtube.com" className="font-bold">
            CTResto
          </a>
        </div>
      </div>
    </section>
  );
}
