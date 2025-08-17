import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
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
      const speed = 0.06;
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

  const size = isHoveringTarget ? 50 : 30;
  const border = isHoveringTarget ? "1px solid transparent" : "1px solid #cf8536";
  const background = isHoveringTarget ? "rgba(207, 133, 54, 0.3)" : "transparent";

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        marginLeft: `-${size / 2}px`,
        marginTop: `-${size / 2}px`,
        borderRadius: "50%",
        backgroundColor: background,
        border: border,
        pointerEvents: "none",
        transition: "width 0.25s ease, height 0.25s ease, margin 0.25s ease, background-color 0.25s ease, border 0.25s ease",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
