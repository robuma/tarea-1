import React from "react";

const listaEstudiantes = [
  {
    dbkey: 1,
    nombre: "Roberto",
    apellido: "Umaña",
    edad: 35,
  },
  {
    dbkey: 2,
    nombre: "José",
    apellido: "Pérez",
    edad: 20,
  },
  {
    dbkey: 3,
    nombre: "Juan",
    apellido: "Pérez",
    edad: 20,
  },
  {
    dbkey: 4,
    nombre: "Luis",
    apellido: "Pérez",
    edad: 20,
  },
  {
    dbkey: 5,
    nombre: "Cristian",
    apellido: "Pérez",
    edad: 20,
  },
  {
    dbkey: 6,
    nombre: "Fiorella",
    apellido: "Pérez",
    edad: 20,
  },
  {
    dbkey: 7,
    nombre: "Yensy",
    apellido: "Pérez",
    edad: 20,
  },
];

export const ListaEstudiantes = () => {
  return (
    <>
      <h1>Tarea 1</h1>
      <ul>
        {listaEstudiantes.map(function (estudiante, key) {
          return (
            <li key={estudiante.dbkey}>
              <p>
                {estudiante.nombre} {estudiante.apellido}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
