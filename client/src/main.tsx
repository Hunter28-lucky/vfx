import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Cinematic smooth scroll with Lenis
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      gestureOrientation: 'vertical',
      touchMultiplier: 2,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}

createRoot(document.getElementById("root")!).render(
  <SmoothScrollProvider>
    <App />
  </SmoothScrollProvider>
);
