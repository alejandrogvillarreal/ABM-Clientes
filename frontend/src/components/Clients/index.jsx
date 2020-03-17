import React, { useEffect, useContext, useState, useCallback } from "react";
import ClientsContent from "./Clients";

import { languageContext } from "../../config/language";

const Clients = props => {
  const { languageContext: lang } = useContext(languageContext);
  const [clients, setClients] = useState([]);

  const fetchClients = useCallback(() => {
    fetch("http://localhost:3003/clientes", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        setClients(res.rta);
      });
  }, [setClients]);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const handleDeleteClient = clientId => {
    fetch(`http://localhost:3003/clientes/${clientId}`, {
      method: "delete",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        alert(lang.clientSuccesfullyRemoved);
        fetchClients();
      });
  };

  return (
    <ClientsContent clients={clients} handleDeleteClient={handleDeleteClient} />
  );
};

export default Clients;
