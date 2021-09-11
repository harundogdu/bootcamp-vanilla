import { Form } from "react-bootstrap";
function TextArea({ text, setText }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Form.Group className="mb-3">
      <Form.Label>Add a new Note!</Form.Label>
      <Form.Control
        as="textarea"
        rows={7}
        value={text}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default TextArea;
