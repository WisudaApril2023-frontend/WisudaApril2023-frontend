/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/comma-dangle */
import Image from 'next/image';
import Link from 'next/link';
import logoWispril from '@src/assets/images/logo.png';
import { useState, useEffect } from 'react';

const MENU_LIST = [
  { text: 'ABOUT US', href: '/' },
  { text: 'TIMELINE', href: '/' },
  { text: 'EVENT', href: '/' },
  { text: 'LOGIN', href: '/', border: true },
];

const Wispril = (): JSX.Element => {
  return (
    <a href="/">
      <div
        style={{
          fontFamily: 'Excalibur-Nouveau',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '38px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#8C4975',
          textShadow: '2.5px 1.5px 0 #FFF1D7',
          whiteSpace: 'nowrap',
        }}>
        WISUDA APRIL 2023
      </div>
    </a>
  );
};

const Home = (): JSX.Element => {
  return (
    <a href="/">
      <div
        className="hover:underline"
        style={{
          marginLeft: '20px',
          fontFamily: 'Excalibur-Nouveau',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '38px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#8C4975',
          textShadow: '2.5px 1.5px 0 #FFF1D7',
          whiteSpace: 'nowrap',
        }}>
        HOME
      </div>
    </a>
  );
};

const About = (): JSX.Element => {
  return (
    <a href="/">
      <div
        className="hover:underline"
        style={{
          marginLeft: '20px',
          fontFamily: 'Excalibur-Nouveau',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '38px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#8C4975',
          textShadow: '2.5px 1.5px 0 #FFF1D7',
          whiteSpace: 'nowrap',
        }}>
        ABOUT US
      </div>
    </a>
  );
};

const Timeline = (): JSX.Element => {
  return (
    <a href="/">
      <div
        className="hover:underline"
        style={{
          marginLeft: '20px',
          fontFamily: 'Excalibur-Nouveau',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '38px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#8C4975',
          textShadow: '2.5px 1.5px 0 #FFF1D7',
          whiteSpace: 'nowrap',
        }}>
        TIMELINE
      </div>
    </a>
  );
};

const Event = (): JSX.Element => {
  return (
    <a href="/">
      <div
        className="hover:underline"
        style={{
          marginLeft: '20px',
          fontFamily: 'Excalibur-Nouveau',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '38px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#8C4975',
          textShadow: '2.5px 1.5px 0 #FFF1D7',
          whiteSpace: 'nowrap',
        }}>
        EVENT
      </div>
    </a>
  );
};

const Navbar = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsDropdownOpen(false);
        setIsMenuHidden(true);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="fixed flex top-0 left-0 right-0 z-50">
      <div className="bg-[#ECA829] w-full filter pl-2 pr-8 py-1 h-20 lg:h-24 items-center border-solid border-1 border-black flex justify-between">
        <div className="w-3/12 flex items-center flex-grow">
          <a href="/">
            <Image
              src={logoWispril}
              width={110}
              height={80}
              alt="Logo Wispril"
            />
          </a>
          <div className="">
            <Wispril />
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-8">
            <div className={`sm:flex ${!isMenuHidden ? 'flex' : 'hidden'}`}>
              <div className="ml-8">
                <Home />
              </div>
              <div className="ml-8">
                <About />
              </div>
              <div className="ml-8">
                <Timeline />
              </div>
              <div className="ml-8">
                <Event />
              </div>
            </div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="sm:hidden text-2xl text-white focus:outline-none"
              style={{
                marginLeft: '20px',
                fontFamily: 'Excalibur-Nouveau',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '38px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#8C4975',
                textShadow: '2.5px 1.5px 0 #FFF1D7',
                whiteSpace: 'nowrap',
              }}>
              ☰
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-[#ECA829] top-20 left-0 w-full sm:hidden border-solid border-5 border-[#bf7c00]">
                <ul className="flex flex-col text-center">
                  {MENU_LIST.map((menu, index) => (
                    <li key={index} className="py-4">
                      <Link href={menu.href}>
                        <a
                          className="uppercase font-semibold text-white hover:underline"
                          style={{
                            marginLeft: '20px',
                            fontFamily: 'Excalibur-Nouveau',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '32px',
                            lineHeight: '38px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#8C4975',
                            textShadow: '2.5px 1.5px 0 #FFF1D7',
                            whiteSpace: 'nowrap',
                          }}>
                          {menu.text}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
