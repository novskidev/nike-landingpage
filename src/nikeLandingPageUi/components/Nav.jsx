import { headerLogo } from "../../assets/assetsNikeLandingPageUI/images";
import { hamburger } from "../../assets/assetsNikeLandingPageUI/icons";
import { navLinks } from "../constant";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between item-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="Logo" />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div>
          <img
            className="hidden max-lg:block"
            src={hamburger}
            width={25}
            height={25}
            alt="Hamburger Icon"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
