export default function useMobile() {
  if(typeof window !== "undefined") {
    return isMobile();
  }
  else {
    document.addEventListener("resize", () => {
      return window.innerWidth;
    });
    
  }
}

function isMobile() {
  return typeof window !== "undefined" && window.innerWidth < 1024;
}