import { useEffect } from "react";
/*
Zadání: Vytvořte v této komponentě efekt, který se spustí při prvním zobrazení komponenty
  a v konzoli vypíše text „Jsem tady“.
*/

export const Ukol2 = () => {
  useEffect(() => {
  
    console.log("sem tady 2")
}, []);
  return (
    <>
      <p>Jsem tady...</p>
    </>
  );
};
