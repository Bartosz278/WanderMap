import { CitiesContext } from "./CitiesContext";
import { useContext } from "react";

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("cities context was used outside CitiesProvider");
  return context;
}

export default useCities;
