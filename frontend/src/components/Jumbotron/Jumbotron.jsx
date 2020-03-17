import React, { useContext } from "react";
import { languageContext } from "../../config/language";

export default props => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">{lang.crudClients}</h1>
        <p class="lead">{lang.appDetail}</p>
      </div>
    </div>
  );
};
