// Source - https://stackoverflow.com/q/64361996
// Posted by Berg_Durden
// Retrieved 2026-04-30, License - CC BY-SA 4.0

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const pathname = useLocation();
//let sectionDest = pathname.state?.id;
//let elementFromID  = document.getElementById(sectionDest);
//console.log(sectionDest);
//console.log(elementFromID);

/* if(elementFromID){
    console.log("found element")
    elementFromID.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
else{ */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
/*}*/

  return null;
}
