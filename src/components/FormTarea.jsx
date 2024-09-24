//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormTarea = (e) => {
  const [listaTareas, setListaTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  //const tomarTexto = (e) => setTarea(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar la tarea en listaTareas
    //listaTareas.push(tarea); no se puede usar porque es un metodo mutable
    //... operador spread
    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = listaTareas.filter((item) => item !== nombreTarea);
    setListaTareas(tareasFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="escribe una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas listaTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormTarea;
