import { useEffect, useState } from "react";
import { HeaderContainer } from "../styled/Styles";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOn, setIsMenuOn] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOn(false);
      }
    };
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <HeaderContainer className={scrolled ? "scrolled" : ""}>
      <nav>
        <h1>
          <a href="#">JJW's Portfolio</a>
        </h1>
        <ul className={isMenuOn ? "on" : ""}>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                scrollToSection("AboutMe");
              }}>
              About me
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                scrollToSection("Skills");
              }}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="Archiving"
              onClick={e => {
                e.preventDefault();
                scrollToSection("Archiving");
              }}>
              Archiving
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                scrollToSection("Projects");
              }}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                scrollToSection("Career");
              }}>
              Career
            </a>
          </li>
        </ul>
        <button
          onClick={() => {
            setIsMenuOn(!isMenuOn);
          }}>
          <i className="xi-bars"></i>
        </button>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
