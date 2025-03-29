"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="p-2 rounded-full shadow-lg bg-primary text-white hover:bg-primary/80"
        >
          <ArrowUp className="w-5 h-5 dark:text-black" />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
