import React from 'react';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center" style={{color: "blueviolet"}}> APLICACION CRUD CON HOOKS </h1>
      <div className="row mt-3">
        <div className="col-8">
          <h1 className="text-center">
            Lista de Items
          </h1>
            <ul className="list-group">
              <li className="list-group-item">
                 <span className="lead">No hay ningun item</span>
                 <button className="btn btn-danger float-right mx-2">Eliminar </button>
                 <button className="btn btn-warning float-right">Editar </button>
              </li>
            </ul>
        </div>
        <div className="col-4">
          <h1 className="text-center">Agregar</h1>
          <form>
            <input 
            type="text"
            placeholder="Ingrese nuevo dato"
            className="form-control mb-2"
            />
            <button className="btn btn-dark btn-block">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
