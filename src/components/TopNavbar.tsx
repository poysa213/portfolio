import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FadeContainer,
  hamFastFadeContainer,
  mobileNavItemSideways,
  popUp,
} from "../content/FramerMotionVariants";
import { navigationRoutes, mobileNavigationRoutes } from "../utils/utils";
import { FiMoon, FiSun } from "react-icons/fi";
import { HamBurgerProps, MobileMenuProps, NavItemProps } from "@types";

export default function TopNavbar() {
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

 
  const control = useAnimation();
  const [navOpen, setNavOpen] = useState(false);

  // const useDarkMode = () => {
  //   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
  //   const changeDarkMode = (value: boolean) => {
  //     setIsDarkMode(value);
  //   };
  
  //   return { isDarkMode, changeDarkMode };
  // };


  

  const addShadowToNavbar = useCallback(() => {
    if (window.scrollY > 10) {
      navRef?.current?.classList.add(
        ...[
          "shadow",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary",
        ]
      );

      control.start("visible");
    } else {
      navRef?.current?.classList.remove(
        ...[
          "shadow",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary",
        ]
      );
      control.start("hidden");
    }
  }, [control]);

  useEffect(() => {
    window.addEventListener("scroll", addShadowToNavbar);
    return () => {
      window.removeEventListener("scroll", addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

 
  function lockScroll() {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("lock-scroll"); 
  }

 
  function handleClick() {
    lockScroll();
    setNavOpen(!navOpen);
  }

  return (
    <nav className="w-full shadow">
    <div
      className="fixed w-full md:px-8 dark:text-white top-0 flex items-center justify-between px-4 py-[10px] sm:p-4 sm:px-6 z-50 print:hidden"
      ref={navRef}
    >
      {/* Mobile Navigation Hamburger and MobileMenu */}
      <HamBurger open={navOpen} handleClick={handleClick} />
      <AnimatePresence>
        {navOpen && (
          <MobileMenu links={mobileNavigationRoutes} handleClick={handleClick} />
        )}
      </AnimatePresence>
      <motion.div
          initial="hidden"
          animate="visible"
          variants={FadeContainer}
          className="flex items-center md:gap-2"
        >
<Link href="/" passHref className="relative hidden sm:inline-flex mr-3">
        <div className="flex gap-2 items-center cursor-pointer z-50">
        
            {/* <Logo className="w-12 h-12" /> */}
            <h3 className=" font-medium">poysa213:~#<span className="animate-ping">_</span></h3>
         
          <motion.p
            initial="hidden"
            animate={control}
            variants={{
              hidden: { opacity: 0, scale: 1, display: "none" },
              visible: { opacity: 1, scale: 1, display: "inline-flex" },
            }}
            className="absolute sm:!hidden w-fit left-0 right-0 mx-auto flex justify-center  text-base font-sarina"
          >
            Youcef Hanaia
          </motion.p>
        </div>
      </Link>
        </motion.div>
      

      {/* Top Nav list */}
      <motion.nav className="hidden sm:flex z-10 md:absolute md:inset-0 md:justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FadeContainer}
          className="flex items-center md:gap-2"
        >
          {navigationRoutes.map((link, index) => {
            const navlink = `${link.toLowerCase()}` === '/blog' ? 'https://poysa.hashnode.dev' : `${link.toLowerCase()}`;
            return (
              <NavItem
                key={index}
                href={navlink}
                text={link}
                router={router}
              />
            );
          })}
        </motion.div>
      </motion.nav>
    </div>
    </nav>
  );
}

// NavItem Container
function NavItem({ href, text, router }:NavItemProps) {
  const isActive = router.asPath === (href);
  return (
    <Link href={href} passHref>
      <motion.a
        variants={popUp}
        className={`${
          isActive
            ? "font-bold text-gray-800 dark:text-gray-100"
            : " text-gray-600 dark:text-gray-300"
        } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 dark:hover:bg-neutral-700/50 rounded-md`}
      >
        <span className="capitalize">{text}</span>
      </motion.a>
    </Link>
  );
}

// Hamburger Button
function HamBurger({ open, handleClick }:HamBurgerProps) {
  return (
    <motion.div
      style={{ zIndex: 1000 }}
      initial="hidden"
      animate="visible"
      variants={popUp}
      className="sm:hidden"
    >
      {!open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50"
          onClick={handleClick}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer select-none transform duration-300  rounded-md active:scale-50"
          onClick={handleClick}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </motion.div>
  );
}

// Mobile navigation menu
const MobileMenu = ({ links, handleClick }:MobileMenuProps) => {
  return (
    <motion.div
      className="absolute font-normal bg-white dark:bg-darkPrimary w-screen h-screen top-0 left-0 z-10 sm:hidden"
      variants={hamFastFadeContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.nav className="mt-28 mx-8 flex flex-col">
        {links.map((link, index) => {
          const navlink = `${link.toLowerCase()}` === '/home' ? '/' : `${link.toLowerCase()}` === '/blog' ? 'https://poysa.hashnode.dev' : `${link.toLowerCase()}`;
          return (
            <Link href={navlink} key={`mobileNav-${index}`} passHref>
              <motion.a
                href={navlink}
                className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
                variants={mobileNavItemSideways}
                onClick={handleClick}
              >
                {link === "rss" ? link.toUpperCase() : link}
              </motion.a>
            </Link>
          );
        })}
      </motion.nav>
    </motion.div>
  );
};
