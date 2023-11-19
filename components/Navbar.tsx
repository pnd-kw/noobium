import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { useState } from "react";

import Button from "./Button";

type Props = {};

const NavBar: React.FC<Props> = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <header className="h-16 border-b border-slate-200 flex items-center justify-between px-24">
      <Link href="/">
        <img src="/images/logo-with-text.svg" />
      </Link>

      <div className="w-[720px] absolute left-1/2 -translate-x-1/2 flex items-center">
        <MdSearch className="text-slate-400 mr-4" size={24} />
        <input
          className="font-sans text-sm placeholder-slate-400 text-slate-900 outline-none"
          type="text"
          placeholder="Search"
          value = {keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>

      <Link href="/auth/sign-in">
        <Button>Sign In</Button>
      </Link>
    </header>
  );
};

export default NavBar;
