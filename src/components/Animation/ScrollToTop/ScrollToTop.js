import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { TopToBtn, IconPosition, IconStyle } from "./ScrollToTopStyle";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, scrolled)));
    };

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 580);
      updateScrollProgress();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TopToBtn className="cursor-hover-target">
      <IconPosition
        $visible={showTopBtn}
        aria-hidden={!showTopBtn}
        title="Do góry"
      >
        <IconStyle onClick={goToTop} $progress={scrollProgress}>
          <FaAngleUp />
        </IconStyle>
      </IconPosition>
    </TopToBtn>
  );
};

export default ScrollToTop;