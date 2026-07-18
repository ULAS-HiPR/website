"use client";

import { useEffect, useRef, useState } from "react";

export function useNavVisible() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const update = () => {
      const nextY = window.scrollY;

      if (nextY < 24) {
        setVisible(true);
      } else if (nextY < lastY.current - 4) {
        setVisible(true);
      } else if (nextY > lastY.current + 4) {
        setVisible(false);
      }

      lastY.current = nextY;
    };

    lastY.current = window.scrollY;
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return visible;
}
