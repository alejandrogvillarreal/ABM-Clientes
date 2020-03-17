import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { languageContext } from "../../config/language";

export default props => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <div className="container">
      <h2 className="text-center">{lang.clientsList}</h2>
      <div className="mx-auto text-center mt-3 mb-3">
        <Link className="btn text-white bg-dark shadow" to="/clientes/cargar">
          {lang.newClient}
        </Link>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center flex-wrap col-12">
          {props.clients.map((client, key) => (
            <div key={key} className="card mt-2 col-12">
              <div className="card-body">
                <h5 className="card-title">
                  {lang.name}: {client.first_name && client.first_name}
                </h5>
                <p className="card-text">
                  {lang.lastname}: {client.last_name && client.last_name}
                </p>
                <p className="card-text">
                  {lang.email}: {client.email && client.email}
                </p>
                <div className="d-flex justify-content-end">
                  <Link className="btn btn-info" to={`/clientes/${client.id}`}>
                    {lang.edit}
                  </Link>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => props.handleDeleteClient(client.id)}
                  >
                    {lang.delete}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
