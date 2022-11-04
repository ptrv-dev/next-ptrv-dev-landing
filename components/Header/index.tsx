import Link from 'next/link';
import React from 'react';

const LanguageButton = () => {
  return (
    <button className="flex group uppercase items-center gap-2 transition-colors hover:text-teal-500">
      <span>Eng</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="group-hover:stroke-teal-500 transition-colors"
          d="M13 5.5L8 10.5L3 5.5"
          stroke="#F5F5F4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(true);
  const [isScroll, setIsScroll] = React.useState<boolean>(false);

  React.useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', resize);
    if (!(window.innerWidth < 768)) setIsMobile(false);

    const getScroll = () => {
      if (window.scrollY > 320) setIsScroll(true);
      else setIsScroll(false);
    };

    window.addEventListener('scroll', getScroll);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', getScroll);
    };
  }, []);

  const onClickMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        isScroll ? 'bg-stone-800 py-6 shadow-lg' : 'py-6 md:py-10'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="shrink-0 z-10">
          <img src="./static/img/logo.svg" alt="" />
        </Link>
        <nav>
          <ul
            className={`flex gap-7 items-center uppercase flex-col fixed transition-position bg-stone-900 top-0 w-full h-full pt-24 text-xl md:text-base md:bg-transparent md:relative md:flex-row md:p-0 ${
              !isMenuOpen ? 'left-full' : 'left-0'
            } md:left-0`}
          >
            <li
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-teal-500 cursor-pointer transition-colors"
            >
              <a href="#hero">Home</a>
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-teal-500 cursor-pointer transition-colors"
            >
              <a href="#about-me">About me</a>
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-teal-500 cursor-pointer transition-colors"
            >
              <a href="#recent-projects">Recent projects</a>
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-teal-500 cursor-pointer transition-colors"
            >
              <a href="#contact-me">Contact me</a>
            </li>
            {isMobile && (
              <li>
                <LanguageButton />
              </li>
            )}
          </ul>
        </nav>
        {!isMobile && <LanguageButton />}

        <button
          onClick={onClickMenu}
          className={`md:hidden z-10 flex flex-col justify-between items-end w-7 h-5 relative`}
        >
          <span
            className={`transition-transform h-0.5 bg-stone-50 w-full ${
              isMenuOpen ? 'absolute top-1/2 -translate-y-1/2 rotate-45' : ''
            }`}
          ></span>
          <span
            className={`transition-transform h-0.5 bg-stone-50 w-full ${
              isMenuOpen ? 'absolute top-1/2 -translate-y-1/2 -rotate-45' : ''
            }`}
          ></span>
          <span
            className={`transition-opacity h-0.5 bg-stone-50 w-3/4 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
