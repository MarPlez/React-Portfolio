import React, { useEffect, useRef, useState } from "react";
import { Intro, LogoHeader, Logo } from "./LandingPageStyle";

export default function LandingPage() {
  const logoRefs = useRef([]);
  const timersRef = useRef([]);
  const [slideUp, setSlideUp] = useState(false); 

  useEffect(() => {
    const spans = logoRefs.current;

    timersRef.current.push(
      setTimeout(() => {
        spans.forEach((span, idx) => {
          timersRef.current.push(
            setTimeout(() => {
              if (span) span.classList.add("active");
            }, (idx + 1) * 400)
          );
        });

        timersRef.current.push(
          setTimeout(() => {
            spans.forEach((span, idx) => {
              timersRef.current.push(
                setTimeout(() => {
                  if (span) {
                    span.classList.remove("active");
                    span.classList.add("fade");
                  }
                }, (idx + 1) * 50)
              );
            });
          }, 2000)
        );

        timersRef.current.push(setTimeout(() => setSlideUp(true), 2300));
      }, 0)
    );

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  return (
    <Intro slideUp={slideUp}>
      <LogoHeader>
        <Logo ref={(el) => (logoRefs.current[0] = el)}>Marcin</Logo>
        <Logo ref={(el) => (logoRefs.current[1] = el)}>Plezia</Logo>
      </LogoHeader>
    </Intro>
  );
}
