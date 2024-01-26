import { useMediaQuery } from "react-responsive";

function useIsMobile() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return isMobile;
}

export default useIsMobile;
