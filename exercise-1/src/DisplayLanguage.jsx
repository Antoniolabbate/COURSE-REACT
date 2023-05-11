import React, { useContext } from "react";
import { LanguageContext } from "./App";

function DisplayLanguage() {
  return (
    <div>
      <h2>Display Language</h2>
      <LanguageContext.Consumer>
        {(value) => (
          <h1>Lingua selezionata: {value.language}</h1>
        )}
      </LanguageContext.Consumer>
    </div>
  );
}

export default DisplayLanguage;