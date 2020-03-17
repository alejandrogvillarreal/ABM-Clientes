import React from 'react';

export const languages = {
  en: {
    crudClients: 'CRUD Clients',
    appDetail: 'APP to create, read, update and delete clients.',
    home: 'Home',
    clientsList: 'Clients list',
    newClient: 'New client',
    clientSuccesfullyCharged: 'Client Successfully charged.',
    clientSuccesfullyEdited: 'Client Successfully edited.',
    clientSuccesfullyRemoved: 'Client Successfully removed.',
    editClient: 'Edit Client',
    addClient: 'Add Client',
    name: 'Name',
    lastname: 'Last Name',
    email: 'Email',
    edit: 'Edit',
    add: 'Add',
    delete: 'Delete',
  },
  es: {
    crudClients: 'ABM Clientes',
    appDetail: 'APP para visualizar, crear, modificar y eliminar clientes.',
    home: 'Inicio',
    clientsList: 'Listado de clientes',
    newClient: 'Nuevo cliente',
    clientSuccesfullyCharged: 'Cliente cargado con éxito.',
    clientSuccesfullyEdited: 'Cliente editado con éxito.',
    clientSuccesfullyRemoved: 'Cliente borrado con éxito.',
    editClient: 'Editar Cliente',
    addClient: 'Agregar Cliente',
    name: 'Nombre',
    lastname: 'Apellido',
    email: 'Email',
    edit: 'Editar',
    add: 'Agregar',
    delete: 'Eliminar',
  },
};

export const languageContext = React.createContext(
  { languageContext: languages.es } // default value
);
