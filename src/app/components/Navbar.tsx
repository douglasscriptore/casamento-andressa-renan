import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-10 py-6 border-b border-2 border-grey-300">
      <div className="flex items-center">
        <Link href="/">
          <span
            className="text-gray-500 font-bold text-lg cursor-pointer"
            style={{ fontFamily: "brittany" }}
          >
            Andressa e Renan
          </span>
        </Link>
      </div>
      <ul className="flex items-center text-sm">
        {/* <li className="ml-6">
          <a className="text-gray-500 hover:text-gray-200 cursor-pointer">
            Historia
          </a>
        </li>
        <li className="ml-6">
          <a className="text-gray-500 hover:text-gray-200 cursor-pointer">
            Onde e quando
          </a>
        </li>
        <li className="ml-6">
          <a className="text-gray-500 hover:text-gray-200 cursor-pointer">
            Padrinhos e Madrinhas
          </a>
        </li> */}
        <li className="ml-6">
          {/* <Link
            href="/pages/gifts"
            className="text-gray-500 hover:text-gray-200 cursor-pointer"
          > */}
          {/* <div className="text-gray-500 hover:text-gray-200 cursor-pointer" onClick={() => alert("Em breve")}> */}
            Lista de presentes em breve...
          {/* </div> */}
          {/* </Link> */}
        </li>
        {/* <li className="ml-6">
          <a className="text-gray-500 hover:text-gray-200 cursor-pointer">
            Confirmação
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
