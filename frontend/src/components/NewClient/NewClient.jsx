import React, { useContext } from "react";
import { languageContext } from "../../config/language";

export default props => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <div className="container">
      <h2 className="text-center">
        {props.isEdit ? lang.editClient : lang.addClient}
      </h2>
      <div className="row">
        <form
          className="mx-auto mt-5 col-md-6"
          onSubmit={props.isEdit ? props.handleEdit : props.handleSubmit}
        >
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>{lang.name}</label>
              <input
                name="first_name"
                id="first_name"
                type="text"
                className="form-control"
                value={props.first_name}
                onChange={e => props.setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>{lang.lastname}</label>
            <input
              name="last_name"
              id="last_name"
              type="text"
              className="form-control"
              value={props.last_name}
              onChange={e => props.setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>{lang.email}</label>
            <input
              name="email"
              id="email"
              type="email"
              className="form-control"
              value={props.email}
              onChange={e => props.setEmail(e.target.value)}
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className={`btn ${props.isEdit ? "btn-info" : "btn-success"}`}
            >
              {props.isEdit ? lang.edit : lang.add}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
