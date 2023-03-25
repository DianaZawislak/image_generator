import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="p-5 flex justify-between  sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">
             <span className="text-blue-500">AI</span> Image
            Generator built by Diana Zawislak
          </h1>
          <h2 className="text-xs">Powered by DALL·E 2 & Chat GPT & Azure</h2>
        </div>
      </div>

      <div className="flex divide-x text-gray-500 items-center text-xs md:text-base">
        <Link
          href="https://www.papareact.com"
          className="px-2 font-semibold text-right"
        >
          Let's Connect
        </Link>
        <Link
          href="https://www.linkedin.com/in/dianazawislak1980/"
          className="px-2 font-light"
        >
          Let's Connect
        </Link>
      </div>
    </header>
  );
}

export default Header;
