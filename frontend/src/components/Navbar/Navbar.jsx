import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../../config/language";

export default props => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <Link className="navbar-brand" to={`/`}>
        {lang.home}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={`/clientes`}>
              {lang.clientsList}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/clientes/cargar`}>
              {lang.newClient}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
