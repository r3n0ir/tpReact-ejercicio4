//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import { Form, Button } from "react-bootstrap";

const FormTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="escribe una tarea" />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormTarea;
