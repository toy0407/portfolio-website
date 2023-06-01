import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed cursor-pointer bottom-4 right-4 p-4 bg-[#0a192f] text-white rounded-full shadow-md transition-all duration-300 animate-bounce  ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-[#F2A2E8] transition ease-in duration-150"
        icon={faAngleDoubleUp}
        size="lg"
        width="20px"
        height="20px"
      />
    </div>
  );
};

export default ScrollToTopButton;
