import React, { useEffect, useContext, useState } from "react";
import NewClientContent from "./NewClient";

import { languageContext } from "../../config/language";

const NewClient = props => {
  const { languageContext: lang } = useContext(languageContext);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const fetchClient = clientId => {
    fetch(`http://localhost:3003/clientes`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        const clients = res.rta;
        const clientSelected = clients.find(client => client.id == clientId);
        if (clientSelected) {
          setIsEdit(true);
          setFirstName(clientSelected.first_name || "");
          setLastName(clientSelected.last_name || "");
          setEmail(clientSelected.email || "");
        } else {
          setIsEdit(false);
        }
      });
  };

  useEffect(() => {
    if (props.match.params.id) {
      fetchClient(props.match.params.id);
    }
  }, [props.match.params]);

  const clearState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      fetch("http://localhost:3003/clientes", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cliente: {
            /* genero un id random, en este proyecto lo haremos de esta manera,
            ya que es un proyecto pequeño y de muestra */
            id: Math.round(Math.random() * 1000000),
            first_name: first_name,
            last_name: last_name,
            email: email
          }
        })
      })
        .then(res => res.json())
        .then(res => {
          alert(lang.clientSuccesfullyCharged);
          clearState();
        });
    }
  };

  const handleEdit = e => {
    if (e) {
      e.preventDefault();
      fetch(`http://localhost:3003/clientes/${props.match.params.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cliente: {
            id: Number(props.match.params.id),
            first_name: first_name,
            last_name: last_name,
            email: email
          }
        })
      })
        .then(res => res.json())
        .then(res => {
          alert(lang.clientSuccesfullyEdited);
        });
    }
  };

  return (
    <NewClientContent
      first_name={first_name}
      last_name={last_name}
      email={email}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
      handleEdit={handleEdit}
      isEdit={isEdit}
    />
  );
};

export default NewClient;
