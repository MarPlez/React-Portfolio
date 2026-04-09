import React, { useEffect, useRef, useState } from "react";
import { Cursor } from "./CustomCursorStyles";

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHoveringTarget, setIsHoveringTarget] = useState(false);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const move = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      const target = e.target;
      if (target && target.closest) {
        setIsHoveringTarget(!!target.closest(".cursor-hover-target"));
      }
    };

    const updatePosition = () => {
      const speed = 0.10;
      currentX.current += (mouseX.current - currentX.current) * speed;
      currentY.current += (mouseY.current - currentY.current) * speed;

      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${currentX.current}px`;
        cursor.style.top = `${currentY.current}px`;
      }

      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", move);
    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <Cursor
      ref={cursorRef}
      isHovering={isHoveringTarget}
    />
  );
};

export default CustomCursor;
