import { Coffee } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow lg:hidden"
          >
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Tentang Kami</a>
            </li>
            <li>
              <a>Produk Kami</a>
            </li>
            <li>
              <a>Kontak Kami</a>
            </li>
          </ul>
        </div>
        <a className="font-medium text-xl flex items-center gap-2">
          <Coffee className="text-amber-800" />
          Aroma Sriwijaya
        </a>
      </div>
      <div className="navbar-center hidden lg:flex  hover:cursor-pointer ">
        <ul className="menu menu-horizontal px-1 text-black">
          <li className="hover:bg-amber-500 hover:rounded-box hover:text-white">
            <a>Beranda</a>
          </li>
          <li className="hover:bg-amber-500 hover:rounded-box hover:text-white">
            <a>Tentang Kami</a>
          </li>
          <li className="hover:bg-amber-500 hover:rounded-box hover:text-white">
            <a>Produk Kami</a>
          </li>
          <li className="hover:bg-amber-500 hover:rounded-box hover:text-white">
            <a>Kontak Kami</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn hover:bg-amber-500 hover:rounded-box hover:text-white">
          Pesan Sekarang!
        </a>
      </div>
    </div>
  );
}
