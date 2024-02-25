
import { useEffect} from "react";

/*
Zadání: Vytvořte v této komponentě efekt, který pomocí funkce setTimeout po 3 vteřinách
  v konzoli vypíše text „Jsem tady“.
*/


export const Ukol3 = () => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
    console.log("jsem tady 3");
   
  }, 3000);
  return () => clearTimeout(timeoutId);
}, []);

return (
    <>
      <p>Jsem tady </p>
    </>
  );
};
