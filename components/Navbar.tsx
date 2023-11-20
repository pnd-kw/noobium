import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { useState } from "react";

import Button from "./Button";
import AccountDropdown from "./AccountDropdown";

type Props = {};

const NavBar: React.FC<Props> = () => {
  const [keyword, setKeyword] = useState("");
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  const isLoggedIn = true;

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
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>

      {isLoggedIn && (
        <div className="relative">
          <button onClick={() => setIsDropDownOpen(!isDropdownOpen)}>
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="images/dummy-avatar.png"
              alt="John Doe"
            />
          </button>
          {isDropdownOpen && <AccountDropdown />}
        </div>
      )}
      {!isLoggedIn && (
        <Link href="/auth/sign-in">
          <Button>Sign In</Button>
        </Link>
      )}
    </header>
  );
};

export default NavBar;
