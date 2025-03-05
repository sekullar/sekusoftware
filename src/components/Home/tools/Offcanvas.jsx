import { useState, useEffect } from "react";
import Close from "../../../images/close.svg";

const Offcanvas = ({ returnOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (returnOpen) {
      setIsAnimating(true);
    } else {
      // Geçiş tamamlandığında animasyon durumu sıfırlanır.
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // 300ms, transition süresiyle uyumlu.
    }
  }, [returnOpen]);

  return (
    <>
      <div
        className={`w-full h-screen fixed bg-semiblack-2 transition-all duration-300 z-40 ${
          isAnimating ? "opacity-80" : "opacity-0"
        }`}
        style={{
          transition: "opacity 300ms ease-out",
        }}
      >
        <div
          className={`h-full w-1/3 bg-white fixed start-0 flex flex-col transition-all duration-300 ${
            returnOpen
              ? "transform-[translateX(0)] opacity-100"
              : "transform-[translateX(-100%)] opacity-0"
          }`}
          style={{
            transition: "transform 300ms ease-out, opacity 300ms ease-out",
          }}
        >
          <div className="flex justify-end mt-4">
            <img
              src={Close}
              className="w-[45px] cursor-pointer"
              onClick={() => returnOpen(false)}
              alt="Close"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
