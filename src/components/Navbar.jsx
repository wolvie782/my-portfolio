import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { useRecoilState } from "recoil";
import { themeState } from "../store/atoms";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { title: "About", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Skills", url: "#skills" },
  { title: "Contact", url: "#contact" },
];

const socialMedia = [
  {
    title: "LinkedIn",
    icon: <RiLinkedinBoxFill size={20} />,
    iconLarge: <RiLinkedinBoxFill size={30} />,
    url: "https://www.linkedin.com/in/monu-mahto/",
  },
  {
    title: "Instagram",
    icon: <RiInstagramFill size={20} />,
    iconLarge: <RiInstagramFill size={30} />,
    url: "https://www.instagram.com/_my_life_towards_sieg_/",
  },
  {
    title: "Github",
    icon: <RiGithubFill size={20} />,
    iconLarge: <RiGithubFill size={30} />,
    url: "https://github.com/wolvie782",
  },
];

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);

  /**
   * Handles setting the theme based on the user's preferred color scheme.
   * If the user prefers dark mode, sets the theme to "dark"; otherwise, sets it to "light".
   */
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  /**
   * Updates the document's root element to reflect the current theme.
   * If the theme is set to "dark", adds the "dark" class to the document's root element;
   * otherwise, removes the "dark" class.
   * Dependencies: theme - reflects changes in the theme.
   */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  /**
   * Handles switching themes.
   */
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useGSAP(() => {
    const showHideHeader = gsap
      .from("#navbar", {
        yPercent: -100,
        duration: 0.25,
        ease: "sine.out",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top-=" + 100,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showHideHeader.play();
        } else {
          showHideHeader.reverse();
        }
      },
    });
  });

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setToggleNav(!toggleNav);
    }
  };

  return (
    <nav
      id="navbar"
      className=" sticky dark:text-white dark:bg-transparent backdrop-blur-md top-0 z-[999] w-full h-[10vh] md:h-[11vw] lg:h-[60px] flex justify-between items-center"
    >
      {/* DESKTOP DESIGN */}
      {/* Signature */}
      <header>
        <a href="#home">
          <img
            className=" signature scale-50"
            src={theme === "dark" ? "/signature.png" : "/blackSignature.png"}
            alt="Signature Logo"
          />
        </a>
      </header>

      {/* Nav Links, Social Links and Dark mode Toggle buttons */}
      <div className=" links hidden lg:flex justify-between gap-4 items-center mr-[3vw]">
        {/* Navigation Links */}
        <ul className=" navbar-links flex justify-between gap-7 font-semibold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                className=" opacity-60 hover:opacity-90"
                href={link.url}
                title={link.title}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <p>|</p>

        {/* Social Media Links */}
        <ul className=" social-media flex justify-between gap-7">
          {socialMedia.map((item, index) => (
            <li key={index}>
              <a
                className=" opacity-60 hover:opacity-90"
                href={item.url}
                title={item.title}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        <p>|</p>

        {/* Dark Mode Toggle Button */}
        <button
          className=" hidden md:flex opacity-60 hover:opacity-90 outline-none"
          onClick={handleThemeSwitch}
        >
          {theme === "light" || theme === null ? (
            <BsSun size={24} />
          ) : (
            <MdOutlineDarkMode size={24} />
          )}
        </button>
      </div>

      {/* MOBILE DESIGN */}

      {/* Dark Mode & Toggle Buttons */}
      <div className=" navButtons flex items-center justify-center gap-4 lg:hidden">
        {/* Dark Mode Toggle Button */}
        <button
          className=" lg:hidden md:flex opacity-60 hover:opacity-90 outline-none"
          onClick={handleThemeSwitch}
        >
          {theme === "light" || theme === null ? (
            <BsSun size={24} />
          ) : (
            <MdOutlineDarkMode size={24} />
          )}
        </button>

        {/* Hamburger or Close Icons */}
        <button
          className=" lg:hidden mr-[5vw]"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? <CgClose /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {toggleNav && (
        <div
          onClick={handleBackdropClick}
          className="backgroundOverlay lg:hidden fixed h-[100vh] w-full flex justify-end items-start p-4 bg-black bg-opacity-50 top-[10vh] md:top-[11vw]"
        >
          <div className="menuContainer dark:text-white h-[45%] md:[100%] w-[65%] md:w-[80%] bg-[#d0d2e8] dark:bg-slate-700 rounded-2xl flex flex-col justify-center items-center">
            {/* Navigation Links */}
            <div className="navLinks flex flex-col md:flex-row justify-start md:justify-center items-center h-[80%] w-full gap-4 py-4">
              {navLinks.map((link) => (
                <div
                  key={link}
                  onClick={() => setToggleNav(!toggleNav)}
                  className=" flex justify-center items-center"
                >
                  <a
                    className=" py-2 px-4 w-[40vw] md:w-[15vw] bg-[#7c83d3] dark:bg-slate-500 text-xl md:text-sm flex justify-center items-center text-white rounded-xl"
                    href={link.url}
                    title={link.title}
                  >
                    {link.title}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Handle Links */}
            <div className="socialLinks md:pb-6 flex flex-row justify-center items-center gap-4">
              {socialMedia.map((item, index) => (
                <div key={index} onClick={() => setToggleNav(!toggleNav)}>
                  <a
                    className=" opacity-60 hover:opacity-90 dark:text-white"
                    href={item.url}
                    title={item.title}
                  >
                    {item.iconLarge}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* {toggleNav && <div></div>} */}
    </nav>
  );
}

export default Navbar;
