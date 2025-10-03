import { useEffect, useState, useRef, useCallback } from "react";

export default function FlashlightCursor({
  size = 300,
  opacity = 1,
  innerColor = "#FFFFFF2E",
  outerColor = "#FFFFFF00",
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const animationFrameId = useRef(null);
  // the light will follow the cursor
  const handleMouseMove = useCallback((e, container) => {
    const rect = container.getBoundingClientRect();
    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);
    animationFrameId.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); // update the position of the light
    });
  }, []);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const mouseMoveHandler = (e) => handleMouseMove(e, container);
    const mouseEnterHandler = () => setHovering(true);
    const mouseLeaveHandler = () => setHovering(false);

    // when cursor moves, flashlight will follow
    container.addEventListener("mousemove", mouseMoveHandler);

    // show the light
    container.addEventListener("mouseenter", mouseEnterHandler);

    // hide the light
    container.addEventListener("mouseleave", mouseLeaveHandler);

    // cleanup
    return () => container.removeEventListener("mousemove", mouseMoveHandler);
  }, [handleMouseMove]);

  return (
    <div
      ref={ref}
      className='fixed overflow-hidden rounded-2xl h-full top-0 bottom-0 left-0 right-0'
    >
      <div
        className='pointer-events-none absolute rounded-full transition-opacity duration-100 max-[1024px]:hidden'
        style={{
          width: size,
          height: size,
          top: `${pos.y}px`,
          left: `${pos.x}px`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${innerColor} 0%, ${outerColor} 70%)`,
          opacity: hovering ? opacity : 0,
          mixBlendMode: "lighten",
        }}
      />
    </div>
  );
}
