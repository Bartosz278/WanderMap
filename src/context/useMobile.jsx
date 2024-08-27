import { MobileContext } from "./MobileContext";
import { useContext } from "react";

function useMobile() {
  const isMobile = useContext(MobileContext);
  if (isMobile === undefined) {
    throw new Error("mobile context was used outside MobileProvider");
  }
  return isMobile;
}

export default useMobile;
