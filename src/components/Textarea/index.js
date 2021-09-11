import { Form } from "react-bootstrap";
function TextArea({text,setText}) {  
  return (
    <Form.Group className="mb-3">
      <Form.Label>Add a new Note!</Form.Label>
      <Form.Control as="textarea" rows={7} />
    </Form.Group>
  );
}

export default TextArea;
